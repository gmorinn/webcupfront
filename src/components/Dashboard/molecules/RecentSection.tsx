import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";
import { SmallUser } from "../../../utils/types";
import MinLoader from "../../MinLoader";
import CardUser from "../atoms/CardUser";
import TitleDashboard from "../atoms/TitleDashboard";
import Time from '../../../assets/icons/time.svg'
import Pagination from "../atoms/Paginations";

type Props = {
    img: string
}

const RecentSection: FC<Props> = ({ img }) => {
    const [users, setUsers] = useState<SmallUser[] | null>(null)

    //// PAGINATION ////
    const [total, setTotal] = useState<number>(0);
    const [page, setPage] = useState<number>(0);
    // eslint-disable-next-line
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const navigate = useNavigate()
    /////////////////////

    const { Fetch, loading } = useApi()

    useEffect(() => {
        Fetch(`/v1/web/public/user/recents/${page*rowsPerPage}/${rowsPerPage}`, "GET")
        .then((res:any) => {
            if (res?.success && res?.users && res?.count >= 0) {
                setUsers(res.users)
                setTotal(res.count)

            }
        })
        // eslint-disable-next-line
    }, [rowsPerPage, page])

    return (
        <div id="Recently">
            <TitleDashboard logo={Time}>Les profils les plus récents</TitleDashboard>
            {
                loading ?
                    <MinLoader />
                        :
                        <>
                            {users && users.length > 0 && users.map((v, i) => {
                                return (
                                    <CardUser
                                        key={v.id}
                                        dataTest={`recent-user-${i}`}
                                        user={v}
                                        picture={v.avatar ? process.env.REACT_APP_API_URL + v.avatar : img}
                                        redirection={() => navigate(`/profile/${v.username}`)}
                                    />
                                )
                            })}
                            <Pagination currentPage={page} postsPerPage={rowsPerPage} totalPages={total} handleNext={() => setPage(page+1)} handlePrevious={() => setPage(page-1)} />
                        </>
            }
        </div>
    )
}

export default RecentSection