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
                    styles="mb-5 w-full text-center text-white bg-gradient-to-r from-rose-700 via-rose-600 to-rose-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-rose-300 dark:focus:ring-rose-800 rounded-lg text-sm px-4 py-2"
                >
                Envoyer
            </Button>
            {error && <span className="block text-white text-sm mb-3">{error}</span>}
            <DisplayErrorText errors={errors?.msg}/>
    </div>
    )
}

export default ButtonContact