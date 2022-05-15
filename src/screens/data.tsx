import { FC, useEffect, useState } from "react";
import { Data, UUID } from "../utils/types";
import { useApi } from "../hooks/useApi";
import { useNavigate, useParams } from "react-router-dom";
import { displayError } from "../utils/toastMessage";
import MinLoader from "../components/MinLoader";
import Logo from '../assets/alien.png'
import useUpdateEffect from "../hooks/useUpdateEffect";
import { EmptyString } from "../utils/checkValue";

const DataPage: FC = () => {
    const [data, setData] = useState<Data | null>(null)
    const [name, setName] = useState<string | null>(null)
    const [username, setUsername] = useState<string | null>(null)
    const { Fetch } = useApi()
    const [load, setLoad] = useState(false)
	let { id } = useParams<{id: UUID}>();
    const navigate = useNavigate()

    useEffect(() => {
        setLoad(true)
        Fetch(`/web/data/${id}`)
            .then((res:any) => {
                if (res?.success && res?.data) {
                    setData(res.data)
                    setLoad(false)
                } else {
                    displayError("Cette donnée n'existe pas.")
                    setLoad(false)
                }
            })
            .catch(() => {displayError("Une erreur est survenue."); setLoad(false)})
        // eslint-disable-next-line
    }, [id])

    useUpdateEffect(() => {
        Fetch(`/v1/web/user/${EmptyString(data?.user_id)}`)
            .then((res:any) => {
                if (res?.success && res?.user) {
                    setName(EmptyString(res?.user?.firstname) + " " + EmptyString(res?.user?.lastname))
                    setUsername(EmptyString(res?.user?.username))
                    setLoad(false)
                } else {
                    displayError("Erreur sur l'utilisateur de le donnée.")
                    setLoad(false)
                }
            })
    }, [data])

    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-zinc-900 via-slate-900 to-zinc-900">
             <div className="p-5 items-center flex-col flex-start flex-none ">
                <img className="lg:block h-16 w-auto cursor-pointer ml-5" src={Logo} alt="Logo" onClick={() => navigate('/home')} />
                <small className="text-white">Retournez à l'accueil</small>
            </div>
            <div className="p-5 xs:w-full sm:w-1/2 md:w-1/2 xl:w-2/5 mx-auto">
                {
                    !load ? data &&
                    <div className="flex justify-center items-center flex-col">
                        {data?.image && data?.image !== "" && <img src={process.env.REACT_APP_API_URL + data.image} className="h-32 mb-5" alt="logo" />}
                        <h1 className="text-white text-3xl my-2 italic">
                            Titre:
                        </h1>
                        <p className="text-white text-lg mb-8">
                            {data?.title}
                        </p>
                        <h1 className="text-white text-2xl my-2 italic">
                            Description:
                        </h1>
                        <p className="text-white text-lg mb-8 break-all">
                            {data?.description}
                        </p>
                        <h1 className="text-white text-2xl my-2 italic">
                            Détenteur de l'objet:
                        </h1>
                        <p onClick={() => navigate("/profile/"+username)} className="text-rose-500 italic text-lg cursor-pointer">
                            {name}
                        </p>
                    </div>
                    : <MinLoader />

                }
            </div>
        </div>
    )
}

export default DataPage