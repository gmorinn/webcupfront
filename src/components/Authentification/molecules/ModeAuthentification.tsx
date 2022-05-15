import { Dispatch, FC, SetStateAction } from "react";
import Button from "../../Button";

type Props = {
    setMethod: Dispatch<SetStateAction<"signin" | "signup" | undefined>>
}

const ModeAuthentification: FC<Props> = ({ setMethod }) => {
    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button
                styles="text-white bg-gradient-to-r from-cyan-500 to-rose-700 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-md px-5 py-2.5 text-center"
                action={() => setMethod('signin')}
            >
                Se connecter
            </Button>
            <Button
                styles="text-white bg-gradient-to-r from-cyan-500 to-rose-700 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-md px-5 py-2.5 text-center"
                action={() => setMethod('signup')}
            >
                S'inscrire
            </Button>
        </div>
        <div className="text-white text-center mt-4">
            <small>Inscrivez vous ou connectez vous avec</small>
            <br />
            <small>webcup@gmail.com</small>
            <br />
            <small>webcup974</small>
        </div>
        </>
    )
}

export default ModeAuthentification