import { FC } from "react";
import DisplayErrorText from "../../ResetPassword/atoms/displayError";
import InputLabelName from "../../Settings/molecules/InputLabelName";

type Props = {
    control: any,
    errors?: any
}

const FormSignIn: FC<Props> = ({ control, errors }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:gap-5 w-64">
                <div className="relative z-0 my-4 w-full group">
                    <InputLabelName name="username" control={control} type="text">
                        Nom d'utilisateur
                    </InputLabelName>
                    <DisplayErrorText errors={errors.username}/>
                </div>
                <div className="relative z-0 my-4 w-full group">
                    <InputLabelName name="email" control={control} type="email">
                        Email
                    </InputLabelName>
                    <DisplayErrorText errors={errors.email}/>
                </div>
                <div className="relative z-0 my-4 w-full group">
                    <InputLabelName name="password" control={control} type="password">
                        Mot de passe
                    </InputLabelName>
                    <DisplayErrorText errors={errors.password}/>
                </div>
                <div className="relative z-0 my-4 w-full group">
                    <InputLabelName name="confirm_password" control={control} type="password">
                        Confirmer mot de passe
                    </InputLabelName>
                    <DisplayErrorText errors={errors.confirm_password}/>
                </div>
            </div>
        </>
    )
}

export default FormSignIn