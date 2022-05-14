import { FC, useEffect, useState } from "react";
import UserPresentation from "../components/Profile/organisms/UserPresentation";
import { User } from "../utils/types";
import { useApi } from "../hooks/useApi";
import { useNavigate, useParams } from "react-router-dom";
import { displayError } from "../utils/toastMessage";
import { EmptyString, NullString } from "../utils/checkValue";
import MinLoader from "../components/MinLoader";
import Logo from '../assets/brain.png'

const Profile: FC = () => {
    const [user, setUser] = useState<User | null>(null)
    const { Fetch } = useApi()
    const [load, setLoad] = useState(false)
	let { username } = useParams<{username: string}>();
    const navigate = useNavigate()

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

    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-zinc-900 via-slate-900 to-zinc-900">
             <div className="p-5 flex items-center">
                <img className="lg:block h-16 w-auto cursor-pointer" src={Logo} alt="Logo" onClick={() => navigate('/')} />
            </div>
            <div className="p-5 xs:w-full sm:w-1/2 md:w-1/2 xl:w-2/5 mx-auto">
                {
                    !load ?
                        <UserPresentation 
                            picture={NullString(user?.avatar)}
                            name={`${EmptyString(user?.firstname)} ${EmptyString(user?.lastname)}`}
                        />
                    : <MinLoader />

                }
            </div>
        </div>
    )
}

export default Profile