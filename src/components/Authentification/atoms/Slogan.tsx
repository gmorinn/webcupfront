import React, { FC } from "react";

type Props = {
    children: string
}

const Slogan: FC<Props> = ({ children }) => {
    return (
        <p className="italic text-xs md:text-base">{children}</p>
    )
}

export default Slogan