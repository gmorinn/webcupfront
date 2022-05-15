import { FC } from "react";
import { ForfaitType } from "../../../utils/types";
import Button from "../../Button";
import { EmptyString } from "../../../utils/checkValue";

type Props = {
    memory: string,
    forfait: ForfaitType,
    price: number,
    img: string,
    handleNFT: any
    disable: boolean
}

const CardNft: FC<Props> = ({ memory, forfait, price, img, handleNFT, disable }) => {

    return (
        <div className="flex justify-center items-start flex-col my-4">
            <img src={EmptyString(img)} alt="nft" className="object-contain h-24 w-40 mx-auto my-3" />
            <h3 className="text-white mx-auto my-2 italic text-xl">
                {memory} 
            </h3>
            <ul className="text-white mx-auto my-2">
                <li>
                    &#10003;
                    {
                        forfait.emplacement === "terre" ? "Donnée enfouie sous terre"
                        : forfait.emplacement === "lune" ? "Donnée en orbite autour de la lune"
                        : "Catapultée aux confins de l’univers"
                    }
                </li>
                <li>
                    &#10003;
                    Donnée sauvegardée pendant {forfait.duration}
                </li>
            </ul>
            <h3 className="text-2xl font-medium text-white mb-1 mx-auto">
                {price}€
            </h3>
            <Button
                action={() => handleNFT()}
                disable={disable}
                styles="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xs md:text-lg px-2 py-2 text-center mb-4 mx-auto"
            >
                Obtenir ce NFT maintenant
            </Button>
        </div>
    )
}

export default CardNft