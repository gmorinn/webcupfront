import { FC } from "react";
import DisplayErrorText from "../../ResetPassword/atoms/displayError";
import InputLabelName from "./InputLabelName";

type Props = {
    control: any,
    errors?: any
}

const GroupInputName: FC<Props> = ({ control, errors }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                <div className="relative z-0 mb-6 w-full group">
                    <InputLabelName maxLength={20} name="firstname" control={control} type="text">
                        Prénom
                    </InputLabelName>
                    <DisplayErrorText errors={errors.firstname}/>
                </div>
                <div className="relative z-0 mb-6 w-full group mt-8 md:mt-0">
                    <InputLabelName maxLength={20} name="lastname" control={control} type="text">
                        Nom
                    </InputLabelName>
                    <DisplayErrorText errors={errors.lastname}/>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                <div className="relative z-0 mb-6 w-full group mt-8">
                    <InputLabelName maxLength={20} name="username" control={control} type="text" readonly={true}>
                        Nom d'utilisateur
                    </InputLabelName>
                    <DisplayErrorText errors={errors.username}/>
                </div>
                <div className="relative z-0 mb-6 w-full group mt-8">
                    <InputLabelName maxLength={20} name="email" control={control} type="text" readonly={true}>
                        Email
                    </InputLabelName>
                 </div>
            </div>
        </>
    )
}

export default GroupInputName