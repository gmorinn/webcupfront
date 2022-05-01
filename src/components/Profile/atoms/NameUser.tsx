import React, { FC } from "react";

type Props = {
    children: string,
}

const NameUser: FC<Props> = ({ children }) => {
    return (
        <h1 className="text-white italic text-xl mt-2 relative inline-block">
            {children}
        </h1>
    )
}

export default NameUser