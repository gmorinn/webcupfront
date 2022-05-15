import React, { Dispatch, FC, SetStateAction } from "react";

type Props = {
    setMethod: Dispatch<SetStateAction<"signin" | "signup" | undefined>>
    id: string
}

const ButtonBack: FC<Props> = ({ setMethod, id }) => {
    return (
        <button
            type="button"
            id={id}
            className="text-white border border-rose-500 hover:bg-rose-500 hover:text-white focus:ring-4 focus:ring-rose-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-rose-700 dark:text-rose-700 dark:hover:text-white dark:focus:ring-rose-800"
            onClick={() => setMethod(undefined)}
        >
            <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
            </svg>
        </button>
   )
}

export default ButtonBack