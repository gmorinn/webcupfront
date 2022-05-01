import { FC } from "react";
import CardAuthentification from "../components/Authentification/organisms/CardAuthentification";

const Homepage: FC = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-zinc-900 via-slate-900 to-zinc-900">
            <CardAuthentification />
        </div>
    )
}

export default Homepage