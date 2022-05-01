import { Dispatch, FC, SetStateAction, useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import FormSignUp from "./FormSignUp";
import Button from "../../Button";
import ButtonBack from "../atoms/ButtonBack";
import { useAuth } from "../../../hooks/useAuth";
import { displaySuccess } from "../../../utils/toastMessage";
import { useNavigate } from "react-router-dom";
import Err from '../../../utils/humanResp'

type FormValues = {
    email: string,
    password: string,
    username: string,
    confirm_password: string,
}
type Props = {
    setMethod: Dispatch<SetStateAction<"signin" | "signup" | undefined>>
}

const SignUp: FC<Props> = ({ setMethod }) => {
    const [error, setError] = useState<string | null>(null)
    const { signup, load } = useAuth()
    const navigate = useNavigate()

    const schema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(9),
        confirm_password: yup.string().required().min(9)
            .oneOf([yup.ref('password'), null]),
        username: yup.string().required().min(2),
    });

    const { handleSubmit, control, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(schema)
    });

    const onSubmit:SubmitHandler<FormValues> = async (data:FormValues):Promise<any> => {
        await signup(data)
            .then((res:any) => {
                if (res?.success && res?.user) {
                    displaySuccess("Vous êtes connecté!")
                    navigate("/home");
                }
                else setError(Err(res))
            })
    }

    return (
        <>
            <ButtonBack setMethod={setMethod} id="goBack" />
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="my-24" >
                <FormSignUp control={control} errors={errors} />
                <div className="w-full">
                    <Button
                        type="submit"
                        disable={load}
                        styles="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-4 py-2 mt-3"
                    >
                        Valider
                    </Button>
                </div>
                {error && <span className="block text-white text-sm">{error}</span>}
            </form>
        </>
    )
}

export default SignUp
