import { FC } from "react";
import DisplayErrorText from "../../ResetPassword/atoms/displayError";
import InputLabelName from "./InputLabelData";

type Props = {
    control: any,
    errors?: any
}

const GroupInputName: FC<Props> = ({ control, errors }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                <div className="relative z-0 mb-6 w-full group">
                    <InputLabelName maxLength={20} name="title" control={control} type="text">
                        Titre
                    </InputLabelName>
                    <DisplayErrorText errors={errors.title}/>
                </div>
                <div className="relative z-0 mb-6 w-full group mt-8 md:mt-0">
                    <InputLabelName maxLength={200} name="description" control={control} type="text" textarea>
                        Description
                    </InputLabelName>
                    <DisplayErrorText errors={errors.description}/>
                </div>
            </div>
        </>
    )
}

export default GroupInputName