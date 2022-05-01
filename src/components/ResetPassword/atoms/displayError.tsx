import React, { FC } from "react";

type Props = {
    errors?: any
}

const DisplayErrorText: FC<Props> = ({ errors }) => {
    return (
        <>
            {errors?.type === 'required' && <span className="text-white italic text-xs">Champs Requis</span>}
            {errors?.type === 'email' && <span className="text-white italic text-xs">Mauvais format</span>}
            {errors?.type === 'min' && <span className="text-white italic text-xs">Trop petit</span>}
            {errors?.type === 'max' && <span className="text-white italic text-xs">Trop grand</span>}
            {errors?.type === 'oneOf' && <span className="text-white italic text-xs">Mauvais mot de passe</span>}
            {errors?.type === 'length' && <span className="text-white italic text-xs">Code incorrect</span>}
            {errors?.message && errors?.message.includes(`must match the following: \\"/^\\S*$/\\"`) && <span className="text-white italic text-xs">Les espaces ne sont pas autorisés</span>}
            {errors?.message && errors?.message.includes(`Veuillez mettre une bonne url.`) && <span className="text-white italic text-xs">Veuillez mettre une bonne url.</span>}
        </>
    )
}

export default DisplayErrorText