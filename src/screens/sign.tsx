import { FC } from "react";
import CardLogin from "../components/Authentification/organisms/CardLogin";
import Moon from '../assets/moon.png'
import Galaxy from '../assets/galaxy.png'

const Sign: FC = () => {

    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-zinc-900 via-slate-900 to-zinc-900">
            <div className="grid" />
            <div className="w-full relative">
                <div className="fixed bottom-0 right-0 ">
                    <img src={Moon} className="h-24 md:h-36 lg:h-96 m-8" alt="img"/>
                </div>
                <img style={{animation: `spin ${8}s linear infinite`}} src={Galaxy} className="h-40" alt="img"/>
                <div className="text-white mt-32 flex flex-col items-center justify-content-center">
                    <CardLogin />
                </div>
            </div>
        </div>
    )
};

export default Sign