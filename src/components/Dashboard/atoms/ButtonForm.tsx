import { FC } from "react";
import MinLoader from "../../MinLoader";

type Props = {
    loading: boolean,
    styles?: string
}

const ButtonInput: FC<Props> = ({ children, loading, styles }) => {
    return (
        <button
            type="submit"
            className={`${styles && styles} float-right text-white bg-gradient-to-r from-rose-700 via-rose-600 to-rose-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-rose-300 dark:focus:ring-rose-800 rounded-lg text-sm px-4 py-2`}>
            {loading ? <MinLoader /> : <>{children}</>}
        </button>
    )
}

export default ButtonInput