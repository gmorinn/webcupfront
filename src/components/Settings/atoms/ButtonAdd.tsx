import React, { FC } from "react";

type Props = {
    clic: () => void
}

const ButtonAdd: FC<Props> = ({ clic, children }) => {
    return (
        <button
            type="button"
            className="text-white border-2 px-2 py-2 text-sm rounded-full"
            onClick={clic}
            >
            { children }
        </button>
    )
}

export default ButtonAdd