import React, { FC } from "react";

type Props = {
    title: string
}

const TitleDescription: FC<Props> = ({ title }) => {
    return (
        <h2 className="text-white text-xl lg:text-2xl font-bold mt-8">{title}</h2>
    )
}

export default TitleDescription