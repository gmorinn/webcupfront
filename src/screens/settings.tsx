import { FC, useEffect, useState } from "react";
import NameSettings from "../components/Settings/organisms/NameSettings";
import ButtonAccount from "../components/Settings/organisms/ButtonAccount";
import Title from "../components/Settings/atoms/Title";
import Setting from '../assets/settings.png'
import { useSetRecoilState } from "recoil";
import { currentUserAtom } from "../mode/user";
import { useAuth } from "../hooks/useAuth";
import { useApi } from "../hooks/useApi";
import MinLoader from "../components/MinLoader";
import { useNavigate } from "react-router-dom";
import { Data } from "../utils/types";
import CardData from "../components/Dashboard/atoms/CardData";
import Capsule from "../assets/capsule.png";
import Pagination from "../components/Dashboard/atoms/Paginations";

const Settings: FC = () => {
    const setCurrentUser = useSetRecoilState(currentUserAtom)
    const { user, logout } = useAuth()
    const { Fetch } = useApi()
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<Data[] | null>(null)
    const navigate = useNavigate()

    //// PAGINATION ////
    const [total, setTotal] = useState<number>(0);
    const [page, setPage] = useState<number>(0);
    // eslint-disable-next-line
    const [rowsPerPage, setRowsPerPage] = useState<number>(3);
    /////////////////////

    const removeAccount = () => {
      setLoading(true)
        if (window.confirm("Voulez-vous vraiment supprimer votre compte ?")) {
          Fetch(`/v1/web/user/remove/${user.id}`, "DELETE")
            .then((res) => {
              if (res?.success === true) {
                logout()
                setCurrentUser(null)
                navigate("/")
              } else {
                alert("Une erreur est survenue.")
              }
              setLoading(false)
          })
          .catch((err) => {
              console.log(err)
              alert("Une erreur est survenue.")
              setLoading(false)
          })
        } else setLoading(false)
    }
    const getDataByUserId = async () => {
        await Fetch(`/web/data/user/${user.id}/${page*rowsPerPage}/${rowsPerPage}`).then((res) => {
            if (res?.success === true && res?.data?.length > 0) {
                setData(res.data)
                setTotal(res.count)
            } else {
                alert("Une erreur est survenue.")
            }
        })
    }

    useEffect(() => {
      getDataByUserId()
      // eslint-disable-next-line
  }, [rowsPerPage, page])
  
    useEffect(() => {
      setLoading(true)
      if (user && user.id) {
        Fetch(`/v1/web/user/${user.id}`).then(res => {
          if (res?.success && res?.user) {
            setCurrentUser(res.user)
            getDataByUserId()
          } else {
            setCurrentUser(null)
            logout()
          }
          setLoading(false)
        })
      } else {
        setLoading(true)
        setCurrentUser(null)
      }
      return () => setCurrentUser(null)
      // eslint-disable-next-line
    }, [])
  
    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-zinc-900 via-slate-900 to-zinc-900">
            <div className="p-5 xs:w-full sm:w-1/2 md:w-1/2 xl:w-2/5 mx-auto">
                {
                    !loading ? 
                        <>
                          <Title title="Paramètres" icon={Setting}/>
                          <NameSettings />
                          <Title title="Vos données" />
                          {
                            data && data?.length > 0 ? data.map((res, index) => {
                                  return <CardData res={res} picture={res.image && res.image !== "" ? process.env.REACT_APP_API_URL + res.image : Capsule} key={index} />
                            }) :
                            <p className="text-center text-white">Vous n'avez pas encore ajouté de données.</p>
                          }
                          <Pagination currentPage={page} postsPerPage={rowsPerPage} totalPages={total} handleNext={() => setPage(page+1)} handlePrevious={() => setPage(page-1)} />
                          <ButtonAccount
                            redirectToChangePassword={() => navigate('/check-email')}
                            removeAccount={removeAccount}
                          />
                        </>
                      :
                        <MinLoader />
              }
            </div>
        </div>
    )
}

export default Settings