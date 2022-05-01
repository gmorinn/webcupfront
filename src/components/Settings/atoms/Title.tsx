import React, { FC } from "react";

type Props = {
    title: string,
    icon?: string
}

const Title: FC<Props> = ({ title, icon }) => {
    return (
        <h1 className="text-white flex items-center justify-center italic text-2xl mb-5">
            {icon && <img src={icon} alt="icon" className="object-cover w-20 h-20 mr-2 rounded-full" />}
            <span>
                { title }
            </span>
        </h1>
    )
}

export default Title