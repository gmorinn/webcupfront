import { FC } from "react";
import { ForfaitType } from "../../../utils/types";
import CheckIcon from "../../../assets/icons/check.svg";
import Button from "../../Button";

type Props = {
    forfait: ForfaitType,
    is_populaire?: boolean
}

const CardForfait: FC<Props> = ({ forfait, is_populaire }) => {
    return (
        <div className="relative flex flex-col flex-wrap items-center p-8 bg-opacity-75 border border-blue-700">
            {is_populaire && <span className="absolute px-3 py-1 text-xs font-medium text-white bg-opacity-25 rounded-full bg-gradient-to-r from-blue-700 to-red-400 -top-3">Plus populaire</span>}
            <p className="pb-5 text-white font-medium text-xl italic text-center w-1/2 my-2">Sauvegardez vos données pour <span className="text-blue-700 text-2xl">seulement...</span></p>
            <h3 className="text-3xl font-medium text-white mb-5">9.99€
                <small className="pl-0 text-base align-baseline opacity-80">/mois</small>
            </h3>
            <ul className="w-full text-lg text-indigo-200 text-opacity-70 text-left">
                <li className="flex items-center py-2">
                    <div className="flex items-center justify-center w-6 h-6 mr-3 rounded-full">
                        <img src={CheckIcon} alt="check" />
                    </div>#1 {
                        forfait.emplacement === "terre" ? "Donnée enfouie sous terre"
                        : forfait.emplacement === "lune" ? "Donnée en orbite autour de la lune"
                        : "Catapultée aux confins de l’univers"
                    }
                </li>
                <li className="flex items-center py-2">
                    <div className="flex items-center justify-center w-6 h-6 mr-3 rounded-full">
                        <img src={CheckIcon} alt="check" />
                    </div>#2 Donnée sauvegardée pendant {forfait.duration}
                </li>
                <li className="flex items-center py-2">
                    <div className="flex items-center justify-center w-6 h-6 mr-3 rounded-full">
                        <img src={CheckIcon} alt="check" />
                    </div>#3 Possibilité de rencontrer un ou une influenceuse provenant de Mars ou Neptune
                </li>
            </ul>
            <span className="flex items-center justify-center w-full py-3 mt-5 space-x-2 text-center btn-secondary umami--click--pricing-pro-action">
                <Button
                    styles="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-3xl text-xs md:text-lg px-5 py-2.5 text-center mt-9 mb-2"
                >
                    <span className="text-white font-medium">Je m'inscris</span>
                </Button>
            </span>
            <p className="pt-3 text-sm text-center text-indigo-200 text-opacity-60">
                Pouvant être résilier à tout moment.
            </p>
        </div>
    )
}

export default CardForfait