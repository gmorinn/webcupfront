import { FC } from "react";
import { TypeInput } from "../../../utils/types";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

type Props = {
    control: any,
    name: string,
    type: TypeInput,
    readonly?: boolean,
    textarea?: boolean
    maxLength?: number
}

const InputLabelName: FC<Props> = ({ control, name, children, type, readonly, maxLength, textarea }) => {
    return (
        <>
            <Input
                type={type}
                maxLength={maxLength}
                defaultValue=""
                control={control}
                name={name}
                textarea={textarea}
                readonly={readonly !== undefined ? readonly : false}
            />
            <Label htmlFor={name}>{children}</Label>
        </>
    )
}

export default InputLabelName