import React, { FC } from "react";
import { TypeInput } from "../../../utils/types";
import InputLabelName from "../../Settings/molecules/InputLabelName";
import DisplayErrorText from "../atoms/displayError";

type Props = {
    name: string,
    type: TypeInput,
    errors: any,
    control: any
}

const InputResetPassword: FC<Props> = ({ name, type, errors, children, control }) => {
    return (
        <div className="relative z-0 mb-6 w-full group mt-8">
            <InputLabelName name={name} control={control} type={type}>
                { children }
            </InputLabelName>
            <DisplayErrorText errors={errors}/>
        </div>
    )
}

export default InputResetPassword