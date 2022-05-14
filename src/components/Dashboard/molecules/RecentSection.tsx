import { FC, useEffect, useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { Data } from "../../../utils/types";
import MinLoader from "../../MinLoader";
import CardData from "../atoms/CardData";
import TitleDashboard from "../atoms/TitleDashboard";
import Clock from '../../../assets/clock.png'
import Pagination from "../atoms/Paginations";

type Props = {
    img: string,
    refresh: boolean
}

const RecentSection: FC<Props> = ({ img, refresh }) => {
    const [data, setdata] = useState<Data[] | null>(null)

    //// PAGINATION ////
    const [total, setTotal] = useState<number>(0);
    const [page, setPage] = useState<number>(0);
    // eslint-disable-next-line
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    /////////////////////

    const { Fetch, loading } = useApi()

    useEffect(() => {
        console.log(refresh)
    }, [refresh])

    useEffect(() => {
        Fetch(`/web/data/recents/${page*rowsPerPage}/${rowsPerPage}`, "GET")
        .then((res:any) => {
            if (res?.success && res?.data && res?.count >= 0) {
                setdata(res.data)
                setTotal(res.count)

            }
        })
        // eslint-disable-next-line
    }, [rowsPerPage, page, refresh])

    return (
        <div id="Recently">
            <TitleDashboard logo={Clock}>Les objets les plus récents</TitleDashboard>
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