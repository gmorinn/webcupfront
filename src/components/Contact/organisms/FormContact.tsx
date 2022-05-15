import { FC, useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from "react-hook-form";
import { useApi } from "../../../hooks/useApi";
import { displaySuccess } from "../../../utils/toastMessage";
import Err from "../../../utils/humanResp";
import ButtonContact from "../molecules/ButtonContact";
import InputMessage from "../atoms/InputMessage";
import TitleContact from "../atoms/TitleContact";
import { useAuth } from "../../../hooks/useAuth";
import { EmptyString } from "../../../utils/checkValue";

type FormValues = {
    msg: string
}

const FormContact: FC = () => {
    const [error, setError] = useState<string | null>(null)
    const { Fetch, loading } = useApi()
    const { getUser } = useAuth()

    const schema = yup.object({
        msg: yup.string().required().min(3).max(500),
    });

    const { handleSubmit, control, formState: { errors, isSubmitSuccessful }, reset } = useForm<FormValues>({
        resolver: yupResolver(schema),
        defaultValues: {
            msg: "",
        },
    });

    const onSubmit:SubmitHandler<FormValues> = data => {
        const id = getUser()?.id
        Fetch('/v1/web/contacts/add', "POST", { msg: data.msg, user_id: EmptyString(id) })
            .then((res:any) => {
                if (res?.success === true) {
                    displaySuccess("Votre message a bien été envoyé")
                } else setError(Err(res))
            })
            .catch(err => {
                setError(Err(err))
            })
    }

    useEffect(()=> {
        if (isSubmitSuccessful) {
            reset()
        }
    // eslint-disable-next-line
    }, [isSubmitSuccessful])


    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-zinc-900 via-slate-900 to-zinc-900">
            <div className="grid"/>
            <div className="w-2/3 md:w-1/2 mx-auto">
                <TitleContact />
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="mt-4">
                    <InputMessage control={control} />
                    <ButtonContact loading={loading} errors={errors} error={error} />
                </form>
            </div>
            <div className="text-white text-center mt-4">
                <small>Vous voulez contribuez au développement de la plateforme? Voici nos codes sources:</small>
                <br />
                <small>Front-End: <span className="cursor-pointer text-blue-500" onClick={() => window.open("https://github.com/gmorinn/webcupfront")}>github.com/gmorinn/webcupfront</span></small>
                <br />
                <small>Back-End: <span className="cursor-pointer text-blue-500" onClick={() => window.open("https://github.com/gmorinn/webcup")}>github.com/gmorinn/webcup</span></small>
                <br />
                <small>Back-office: <span className="cursor-pointer text-blue-500" onClick={() => window.open("https://github.com/gmorinn/webcup_bo")}>github.com/gmorinn/webcup_bo</span></small>
            </div>
        </div>
    )
}

export default FormContact