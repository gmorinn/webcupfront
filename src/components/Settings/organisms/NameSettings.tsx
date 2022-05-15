import { FC, useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import GroupInputName from "../molecules/GroupInputName";
import ButtonInput from "../atoms/ButtonForm";
import Title from "../atoms/Title";
import { useRecoilState } from "recoil";
import { currentUserAtom } from "../../../mode/user";
import { useApi } from "../../../hooks/useApi";
import { displaySuccess } from "../../../utils/toastMessage";
import Err from "../../../utils/humanResp";
import { UUID } from "../../../utils/types";
import AvatarSettings from "./AvatarSettings";

type FormValues = {
    id: UUID,
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    poste: string
}

const NameSettings: FC = () => {
    const [error, setError] = useState<string | null>(null)
    const { Fetch, loading } = useApi()
    const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom)

    const schema = yup.object({
        email: yup.string().required().email(),
        id: yup.string().required().uuid(),
        firstname: yup.string().required().min(3).max(20),
        lastname: yup.string().required().min(3).max(20),
        username: yup.string().required().min(3).matches(/^\S*$/).max(20),
    });

    const { handleSubmit, control, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(schema),
        defaultValues: {
            id: currentUser?.id,
            firstname: currentUser?.firstname,
            lastname: currentUser?.lastname,
            username: currentUser?.username,
            email: currentUser?.email,
        },
    });

    const onSubmit:SubmitHandler<FormValues> = data => {
        Fetch('/v1/web/user/edit', "PUT", {...data})
            .then((res:any) => {
                if (res?.success && res?.user) {
                    setCurrentUser(res.user)
                    displaySuccess("Votre profil a été mis à jour.")
                } else setError(Err(res))
            })
    }

    return (
        <div className="my-24">
            <AvatarSettings />
            <Title title="Votre description" />
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="mt-4" id="form-names">
                <GroupInputName control={control} errors={errors} />
                <div className="w-full h-8">
                    {error && <span className="block text-white text-sm mb-1">{error}</span>}
                    <ButtonInput loading={loading}>Valider</ButtonInput>
                </div>
            </form>
            <div className="text-center mb-5">
                <small className="text-white">
                    Vous êtes l'un des administrateurs de la plateforme? Allez sur 
                    <span className="italic text-blue-500 cursor-pointer" onClick={() => window.open("https://bo.team-gm.re/")}> bo.team-gm.re</span>
                </small>
                <br />
                <small className="text-white">Email: webcup@gmail.com</small>
                <br />
                <small className="text-white">Mdp: webcup974</small>
            </div>
        </div>
    )
}

export default NameSettings
