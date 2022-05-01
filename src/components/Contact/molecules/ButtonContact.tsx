import { FC } from "react";
import Button from "../../Button";
import DisplayErrorText from "../../ResetPassword/atoms/displayError";

type Props = {
    loading: boolean
    error: string | null
    errors: any
}

const ButtonContact: FC<Props> = ({ loading, errors, error }) => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Button
                    disable={loading}
                    type="submit"
                    styles="mb-5 w-full text-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-4 py-2"
                >
                Envoyer
            </Button>
            {error && <span className="block text-white text-sm mb-3">{error}</span>}
            <DisplayErrorText errors={errors?.msg}/>
    </div>
    )
}

export default ButtonContact