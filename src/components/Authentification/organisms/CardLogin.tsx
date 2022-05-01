import { FC, useState } from "react";
import SignIn from "../molecules/SignIn";
import SignUp from "../molecules/SignUp";
import ModeAuthentification from "../molecules/ModeAuthentification";

const CardLogin: FC = () => {
    const [method, setMethod] = useState<'signin' | 'signup' | undefined>(undefined)
    return (
        <>
            {method === undefined && <ModeAuthentification setMethod={setMethod} />}
            {method === 'signin' && <SignIn setMethod={setMethod} />}
            {method === 'signup' && <SignUp setMethod={setMethod} />}
        </>
    )
}

export default CardLogin