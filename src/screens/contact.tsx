import { FC } from "react";
import FormContact from "../components/Contact/organisms/FormContact";

const Contact: FC = () => {

    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-zinc-900 via-slate-900 to-zinc-900">
            <div className="grid"/>
            <FormContact />
        </div>
    )
}

export default Contact