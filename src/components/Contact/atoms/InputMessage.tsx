import { FC } from "react";
import { Controller } from "react-hook-form";

type Props = {
    control: any
}

const InputMessage: FC<Props> = ({ control }) => {
    return (
        <Controller
                control={control}
                name={"msg"}
                defaultValue={""}
                render={({ field }) => <textarea {...field}
                className="mb-8 block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-rose-700 appearance-none focus:outline-none focus:ring-0 focus:border-rose-600 peer"
                id={"bug"}
                autoComplete="off"
                placeholder="Votre message"
                rows={6}
                maxLength={500}
            />}
        />
    )
}

export default InputMessage