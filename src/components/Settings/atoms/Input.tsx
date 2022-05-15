import { FC } from "react";
import { Controller } from "react-hook-form";
import { TypeInput } from "../../../utils/types";

type Props = {
    control: any,
    name: string,
    defaultValue: string,
    type: TypeInput,
    readonly?: boolean,
    maxLength?: number
}

const Input: FC<Props> = ({ control, defaultValue, name, type, readonly, maxLength }) => {
    return (
            <Controller
                control={control}
                name={name}
                defaultValue={defaultValue}
                render={({ field }) => <input {...field} type={type}
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-rose-700 appearance-none focus:outline-none focus:ring-0 focus:border-rose-600 peer"
                id={name}
                autoComplete="off"
                readOnly={readonly !== undefined ? readonly : false}
                placeholder=" "
                maxLength={maxLength ? maxLength : 70}
            />}
        />
    )
}

export default Input