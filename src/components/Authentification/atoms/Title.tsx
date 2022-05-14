import React, { FC } from "react";

type Props = {
    children: string
}

const Title: FC<Props> = ({ children }) => {
    return (
        <h1 className="text-3xl md:text-5xl font-bold mb-1">{children}</h1>
    )
}

export default Title