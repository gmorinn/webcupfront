import React, { FC } from "react";

type Props = {
    htmlFor: any
}

const Label: FC<Props> = ({ children, htmlFor }) => {
    return (
        <label
            htmlFor={htmlFor}
            className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-600 peer-focus:dark:text-rose-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            {children}
        </label>
    )
}

export default Label