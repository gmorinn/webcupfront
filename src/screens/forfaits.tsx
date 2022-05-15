import { FC } from "react";
import CardNft from "../components/Forfaits/molecules/CardNft";
import CardForfait from "../components/Forfaits/organisms/CardForfait";
import { ForfaitType, UUID } from '../utils/types'
import NFT1 from '../assets/nft1.png'
import NFT2 from '../assets/nft2.png'
import NFT3 from '../assets/nft3.png'
import NFT4 from '../assets/nft4.png'
import { useApi } from "../hooks/useApi";
import { useAuth } from "../hooks/useAuth";
import { displaySuccess } from "../utils/toastMessage";

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
    const { Fetch, loading } = useApi()
    const { getUser } = useAuth()

    const handleMensuel = () => {
        Fetch("/v1/web/user/edit/stock", "PUT", {number: 1, id: getUser().id})
            .then((res:any) => {
                if (res?.success === true)
                    displaySuccess("Votre stock a été augmenté de 1.")
            })
    }

    const handleNFT = (nb: number) => {
        Fetch("/v1/web/user/edit/stock", "PUT", {number: nb, id: getUser().id})
            .then((res:any) => {
                if (res?.success === true)
                    displaySuccess("Votre stock a été augmenté de " + nb +".")
            })
    }


    return (
        <div className="min-h-screen w-full overflow-auto bg-gradient-to-r from-zinc-900 via-slate-900 to-zinc-900">
            <span className="grid" />
            <h1 className="text-white flex items-center justify-center text-3xl my-12 italic">
                Sauvegarder vos capsules !
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12 mx-auto">
                <div className="flex flex-col my-5">
                    <CardNft img={NFT1} forfait={forfaitTerre} memory="2 données de stockage en plus" price={10} handleNFT={() => handleNFT(2)} disable={loading} />
                    <CardNft img={NFT2} forfait={forfaitTerre} memory="3 données de stockage en plus" price={30} handleNFT={() => handleNFT(3)} disable={loading} />
                </div>
                <div className="">
                    <CardForfait forfait={forfaitLune} is_populaire handleMensuel={handleMensuel} disable={loading} />
                </div>
                <div className="flex flex-col my-5">
                    <CardNft img={NFT3} forfait={forfaitUnivers} memory="7 données de stockage en plus" price={90} handleNFT={() => handleNFT(7)} disable={loading} />
                    <CardNft img={NFT4} forfait={forfaitUnivers} memory="9 données de stockage en plus  " price={200} handleNFT={() => handleNFT(9)} disable={loading} />
                </div>
            </div>
        </div>
    )
}

export default Forfaits