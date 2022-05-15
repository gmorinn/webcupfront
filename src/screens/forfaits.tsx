import { FC } from "react";
import CardNft from "../components/Forfaits/molecules/CardNft";
import CardForfait from "../components/Forfaits/organisms/CardForfait";
import { ForfaitType } from '../utils/types'
import NFT1 from '../assets/nft1.png'
import NFT2 from '../assets/nft2.png'
import NFT3 from '../assets/nft3.png'
import NFT4 from '../assets/nft4.png'

const forfaitTerre: ForfaitType = {
    emplacement: "terre",
    duration: "1 mois"
}

const forfaitLune: ForfaitType = {
    emplacement: "lune",
    duration: "6 mois"
}

const forfaitUnivers: ForfaitType = {
    emplacement: "univers",
    duration: "12 mois"
}

const Forfaits: FC = () => {

    return (
        <div className="min-h-screen w-full overflow-auto bg-gradient-to-r from-zinc-900 via-slate-900 to-zinc-900">
            <span className="grid" />
            <h1 className="text-white flex items-center justify-center text-3xl my-12 italic">
                Sauvegarder vos capsules !
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12 mx-auto">
                <div className="flex flex-col my-5">
                    <CardNft img={NFT1} forfait={forfaitTerre} memory="10 GO de RAM" price={10}  />
                    <CardNft img={NFT2} forfait={forfaitTerre} memory="30 GO de RAM" price={30}  />
                </div>
                <div className="">
                    <CardForfait forfait={forfaitLune} is_populaire />
                </div>
                <div className="flex flex-col my-5">
                    <CardNft img={NFT3} forfait={forfaitUnivers} memory="90 GO de RAM" price={90}  />
                    <CardNft img={NFT4} forfait={forfaitUnivers} memory="200 GO de RAM" price={200}  />
                </div>
            </div>
        </div>
    )
}

export default Forfaits