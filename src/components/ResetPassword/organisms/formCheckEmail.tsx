import { FC } from "react";
import { useAuth } from "../../../hooks/useAuth";
import useRouter from "../../../hooks/useRouter";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { displayError } from "../../../utils/toastMessage";
import InputLabelName from "../../Settings/molecules/InputLabelName";
import ButtonInput from "../../Settings/atoms/ButtonForm";
import DisplayErrorText from "../atoms/displayError";

type FormValues = {
    email: string
}

const FormCheckEmail: FC = () => {
    const router = useRouter()
    const { checkMailAndSendCode, load } = useAuth()

    const schema = yup.object({
        email: yup.string().email().required(),
      }).required();

    const { handleSubmit, control, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<FormValues> = async ({ email }:FormValues):Promise<any> => {
        await checkMailAndSendCode(email)
            .then((res:any) => {
                if (res?.success && res?.exist)
                    router.push('/forgot-password')
                else
                    displayError("L'email n'existe pas.");
            })
        }

    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <div className="relative z-0 mb-6 w-full group mt-8">
                <InputLabelName name="email" control={control} type="email">
                    Email
                </InputLabelName>
                <DisplayErrorText errors={errors.email}/>
            </div>
            <ButtonInput loading={load} styles="w-full">
                Valider
            </ButtonInput>
        </form>
    )
}

export default FormCheckEmail