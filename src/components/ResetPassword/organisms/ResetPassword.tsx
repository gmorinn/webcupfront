import { FC, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import useRouter from "../../../hooks/useRouter";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { displaySuccess } from "../../../utils/toastMessage";
import InputResetPassword from "../molecules/InputResetPassword";
import ButtonInput from "../../Settings/atoms/ButtonForm";

type FormValues = {
    email: string,
    password: string,
    code: string,
    confirm_password: string;
}

const FormCheckEmail: FC = () => {
    const router = useRouter()
    const { resetPassword, load } = useAuth()
    const [error, setError] = useState<string | null>(null)

    const schema = yup.object({
        password: yup.string().required().min(7),
        email: yup.string().email().required(),
        code: yup.string().required().length(5),
        confirm_password: yup.string().required().min(7)
            .oneOf([yup.ref('password'), null], 'Password is different.'),
      }).required();

    const { handleSubmit, control, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<FormValues> = async (res:FormValues):Promise<any> => {
        await resetPassword(res)
            .then((res:any) => {
                if (res?.success === true) {
                    displaySuccess("Mot de passe changé!")
                    router.push('/sign')
                }
                else setError("L'email ou le code est incorrect")
            })
        }

    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <InputResetPassword control={control} name="email" type="email" errors={errors.email}>
                Email
            </InputResetPassword>

            <InputResetPassword control={control} name="password" type="password" errors={errors.password}>
                Mot de passe
            </InputResetPassword>

            <InputResetPassword control={control} name="confirm_password" type="password" errors={errors.confirm_password}>
                Confirmer mot de passe
            </InputResetPassword>

            <InputResetPassword control={control} name="code" type="text" errors={errors.code}>
                Code reçu par mail
            </InputResetPassword>

            {error && <span className="text-white flex justify-center my-2 text-xs">{error}</span>}
            <ButtonInput loading={load} styles="w-full">
                Valider
            </ButtonInput>
        </form>
    )
}

export default FormCheckEmail