import { FC, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { currentUserAtom } from "../../../mode/user";
import { EmptyString, NullString } from "../../../utils/checkValue";
import InputFileBrowser from "../../../utils/InputFileAvatar";
import Avatar from "../../Profile/atoms/Avatar";
import useUpdateEffect from "../../../hooks/useUpdateEffect";
import Unknown from '../../../assets/unknown.png'
import { useApi } from "../../../hooks/useApi";
import { displaySuccess, displayError } from '../../../utils/toastMessage'
import { useNavigate } from "react-router";

const AvatarSettings: FC = () => {
    const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom)
    const navigate = useNavigate()
    const [sourceFile, setSourceFile] = useState<string | null>(NullString(currentUser?.avatar));
    const inputEl = useRef<HTMLInputElement>(null);
    const { Fetch } = useApi()

    const onButtonClick = () => {
        inputEl?.current?.click();
    };

    useUpdateEffect(() => {
        Fetch('/v1/web/user/edit/avatar', "PUT", {avatar: sourceFile || "", id: currentUser?.id})
        .then((res:any) => {
            if (res?.success && res?.user) {
                setCurrentUser(res.user)
                displaySuccess("Votre profil a été mis à jour.")
            } else displayError("Une erreur s'est produite, veuillez rééssayer plus tard.")
        })
    }, [sourceFile])

    return (
        <div className="flex justify-center flex-col mb-5">
            <div className="flex justify-center">
                <Avatar
                    picture={currentUser?.avatar ? `${process.env.REACT_APP_API_URL}${currentUser?.avatar}` : Unknown}
                    styles="object-cover w-20 h-20 my-3 rounded-full cursor-pointer hover:brightness-50"
                    alt="Avatar"
                    clic={onButtonClick}
                />
            </div>
            <InputFileBrowser
                id="avatar"
                value={EmptyString(sourceFile)}
                limit={314572}
                className=""
                ref={inputEl}
                set={setSourceFile}
                hidden={true}
            />
            <button
                type="button"
                onClick={() => navigate(`/profile/${currentUser?.username}`)}
                className="w-1/4 sm:w-1/2 md:w-1/4 mx-auto text-md text-blue-700 cursor-pointer
                            border border-blue-700 p-1 text-center my-5
                            hover:text-white hover:border-white rounded-lg">
                Voir le profil
            </button>
        </div>
    )
}

export default AvatarSettings