import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";
import { Data } from "../../../utils/types";
import MinLoader from "../../MinLoader";
import CardData from "../atoms/CardData";
import TitleDashboard from "../atoms/TitleDashboard";
import Time from '../../../assets/icons/time.svg'
import Pagination from "../atoms/Paginations";

type Props = {
    img: string
}

const RecentSection: FC<Props> = ({ img }) => {
    const [data, setdata] = useState<Data[] | null>(null)

    //// PAGINATION ////
    const [total, setTotal] = useState<number>(0);
    const [page, setPage] = useState<number>(0);
    // eslint-disable-next-line
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const navigate = useNavigate()
    /////////////////////

    const { Fetch, loading } = useApi()

    useEffect(() => {
        Fetch(`/web/data/recents/${page*rowsPerPage}/${rowsPerPage}`, "GET")
        .then((res:any) => {
            if (res?.success && res?.data && res?.count >= 0) {
                setdata(res.data)
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
                            {data && data.length > 0 && data.map((v, i) => {
                                return (
                                    <CardData
                                        key={v.id}
                                        dataTest={`recent-user-${i}`}
                                        res={v}
                                        picture={v.image ? process.env.REACT_APP_API_URL + v.image : img}
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