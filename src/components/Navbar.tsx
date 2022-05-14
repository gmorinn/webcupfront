import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../assets/brain.png'
import { useAuth } from "../hooks/useAuth";

const Navbar: FC = () => {
    const navigate = useNavigate()
    const [isClose, setIsClose] = useState<boolean>(false)
    const { logout } = useAuth()
    

    return (
        <nav className="bg-gradient-to-r from-zinc-900 via-slate-900 to-zinc-900">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                       {
                       !isClose ?
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true" onClick={() => setIsClose(v => !v)}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg> 
                        :
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true" onClick={() => setIsClose(v => !v)}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        }
                    </button>
                </div>
                <div className="flex-1 flex items-center justify-between sm:items-stretch">
                    <div className="flex-shrink-0 flex items-center">
                        <img className="lg:block h-16 w-auto cursor-pointer" src={Logo} alt="Logo" onClick={() => navigate('/home')} />
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                            <div onClick={() => navigate('/home')} className="text-white px-3 py-2 rounded-md text-sm font-medium hover:underline hover:underline-offset-8 cursor-pointer">Accueil</div>
                            <div onClick={() => navigate('/settings')} className="text-gray-300 hover:underline hover:underline-offset-8 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Paramètres</div>
                            <div onClick={() => navigate('/contact')} className="text-gray-300 hover:underline hover:underline-offset-8 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Contact</div>
                            <div onClick={() => navigate('/forfaits')} className="text-gray-300 hover:underline hover:underline-offset-8 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Forfaits</div>
                            <div onClick={() => logout()} className="text-gray-300 hover:underline hover:underline-offset-8 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Se déconnecter</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
               { isClose && <div className="px-2 pt-2 pb-3 space-y-1">
                    <div onClick={() => navigate('/home')} className="text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer hover:underline hover:underline-offset-8">Accueil</div>
                    <div onClick={() => navigate('/settings')} className="text-gray-300 hover:underline hover:underline-offset-8 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Paramètres</div>
                    <div onClick={() => navigate('/contact')} className="text-gray-300 hover:underline hover:underline-offset-8 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Contact</div>
                    <div onClick={() => navigate('/forfait')} className="text-gray-300 hover:underline hover:underline-offset-8 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Forfaits</div>
                    <div onClick={() => logout()} className="text-gray-300 hover:underline hover:underline-offset-8 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Se déconnecter</div>
                </div>}
            </div>
        </nav>
    )
}

export default Navbar