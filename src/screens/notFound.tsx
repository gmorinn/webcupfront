import { FC } from "react";

const NotFound: FC = () => {
    return (
        <div
            className="flex
                items-center
                justify-center
                min-h-screen w-full bg-gradient-to-r from-zinc-900 via-slate-900 to-zinc-900"
            >
                <div className="px-40 py-20 bg-white rounded-md shadow-xl">
                    <div className="flex flex-col items-center">
                    <h1 className="font-bold text-rose-500 text-9xl">404</h1>

                    <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                        <span className="text-rose-500">Oops!</span> Page not found
                    </h6>

                    <p className="mb-8 text-center text-gray-500 md:text-lg">
                        La page que vous recherchez n'existe pas.
                    </p>

                    <button onClick={() => window.open('/home', '_self')} className="px-6 py-2 text-sm font-semibold text-rose-500 bg-rose-100 cursor-pointer">
                        Retournez à l'accueil.
                    </button>
                    </div>
                </div>
            </div>
    )
}

export default NotFound