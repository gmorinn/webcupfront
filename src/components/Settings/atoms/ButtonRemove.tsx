import React, { FC } from "react";

type Props = {
    clic: () => any,
    className: string
}

const ButtonRemove: FC<Props> = ({ children, clic, className }) => {
    return (
        <button
            type="button"
            className={className}
            onClick={clic}
        >
            { children }
        </button>
    )
}

export default ButtonRemove