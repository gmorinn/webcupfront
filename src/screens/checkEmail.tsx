import { FC } from "react";
import FormCheckEmail from "../components/ResetPassword/organisms/formCheckEmail";
import TitleResetPassord from "../components/ResetPassword/atoms/TitleResetPassword";

const ForgotPassword: FC = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-zinc-900 via-slate-900 to-zinc-900">
            <div className="text-white fixed w-3/4 sm:w-1/2 lg:w-1/4 flex flex-col items-center justify-content-center" style={{position:'fixed', top: '45%', left: '50%', transform: "translate(-50%, -50%)"}}>
                <div className="border border-rose-500 w-full rounded-lg p-5">
                    <TitleResetPassord step={1}/>
                    <FormCheckEmail />
                </div>
            </div>
        </div>
    )
};

export default ForgotPassword