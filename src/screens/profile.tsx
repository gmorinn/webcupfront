import { FC, useEffect, useState } from "react";
import UserPresentation from "../components/Profile/organisms/UserPresentation";
import { Data, User } from "../utils/types";
import { useApi } from "../hooks/useApi";
import { useNavigate, useParams } from "react-router-dom";
import { displayError } from "../utils/toastMessage";
import { EmptyString, NullString } from "../utils/checkValue";
import MinLoader from "../components/MinLoader";
import Logo from '../assets/alien.png'
import Capsule from '../assets/capsule.png'
import useUpdateEffect from "../hooks/useUpdateEffect";
import CardData from "../components/Dashboard/atoms/CardData";
import Pagination from "../components/Dashboard/atoms/Paginations";

const Profile: FC = () => {
    const [user, setUser] = useState<User | null>(null)
    const [data, setData] = useState<Data[] | null>(null)
    const { Fetch } = useApi()
    const [load, setLoad] = useState(false)
	let { username } = useParams<{username: string}>();
    const navigate = useNavigate()

    //// PAGINATION ////
    const [total, setTotal] = useState<number>(0);
    const [page, setPage] = useState<number>(0);
    // eslint-disable-next-line
    const [rowsPerPage, setRowsPerPage] = useState<number>(3);
    /////////////////////
    

    useEffect(() => {
        setLoad(true)
        Fetch(`/v1/web/public/user/${username}`)
            .then((res:any) => {
                if (res?.success && res?.user) {
                    setUser(res.user)
                    setLoad(false)
                } else {
                    displayError("Cette utilisateur n'existe pas.")
                    setLoad(false)
                }
            })
            .catch(() => {displayError("Une erreur est survenue."); setLoad(false)})
        // eslint-disable-next-line
    }, [username])

    useUpdateEffect(() => {
        Fetch(`/web/data/user/${user?.id}/${page*rowsPerPage}/${rowsPerPage}`)
        .then((res:any) => {
            if (res?.success && res?.data) {
                setData(res.data)
                setTotal(res.count)
                setLoad(false)
            } else {
                displayError("Une erreur est survenue.")
                setLoad(false)
            }
        })
        .catch(() => {displayError("Une erreur est survenue."); setLoad(false)})
        // eslint-disable-next-line
    }, [user, rowsPerPage, page])

    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-zinc-900 via-slate-900 to-zinc-900">
             <div className="p-5 flex items-center">
                <img className="lg:block h-16 w-auto cursor-pointer" src={Logo} alt="Logo" onClick={() => navigate('/')} />
            </div>
            <div className="p-5 xs:w-full sm:w-1/2 md:w-1/2 xl:w-2/5 mx-auto">
                {
                    !load ?
                    <>
                        <UserPresentation 
                            picture={NullString(user?.avatar)}
                            name={`${EmptyString(user?.firstname)} ${EmptyString(user?.lastname)}`}
                        />
                        <h2 className="italic text-2xl text-white text-center text-rose-700 my-5">
                            Vos données
                        </h2>
                        {data && data.length > 0 && data.map((res: Data) => {
                            return <CardData
                                key={res.id}
                                res={res}
                                picture={res.image ? process.env.REACT_APP_API_URL + res.image : Capsule}
                            />
                        })
                    }
                    <Pagination currentPage={page} postsPerPage={rowsPerPage} totalPages={total} handleNext={() => setPage(page+1)} handlePrevious={() => setPage(page-1)} />

                    </>
                    : <MinLoader />

                }
            </div>
        </div>
    )
}

export default Profile