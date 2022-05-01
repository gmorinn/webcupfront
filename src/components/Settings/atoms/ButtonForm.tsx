import React, { FC } from "react";
import MinLoader from "./MinLoader";

type Props = {
    loading: boolean,
    styles?: string
}

const ButtonInput: FC<Props> = ({ children, loading, styles }) => {
    return (
        <button
            type="submit"
            className={`${styles && styles} float-right text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-4 py-2`}>
            {loading ? <MinLoader /> : <>{children}</>}
        </button>
    )
}

export default ButtonInput