import React, { FC } from "react";

type Props = {
    picture: string,
    styles: string,
    alt: string,
    clic?: () => void
}

const Avatar: FC<Props> = ({ picture, styles, alt, clic }) => {
    return (
        <img src={picture} className={styles} alt={alt} onClick={clic} />
    )
}

export default Avatar