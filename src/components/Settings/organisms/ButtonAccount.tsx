import { FC } from "react";
import Button from "../../Button";

type Props = {
    redirectToChangePassword: () => void,
    removeAccount: () => void,
}

const ButtonAccount: FC<Props> = ({ redirectToChangePassword, removeAccount }) => {
    return (
        <div className="flex justify-around items-center">
            <Button
                action={redirectToChangePassword}
                styles="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Changez mon mot de passe
            </Button>
            <Button
                action={removeAccount}
                styles="text-white bg-gradient-to-r sm:ml-2 from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Supprimer mon compte
            </Button>
        </div>
    )
}

export default ButtonAccount