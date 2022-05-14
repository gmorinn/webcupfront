import { FC } from "react";
import { Data } from "../../../utils/types";

type Props = {
    res: Data,
    picture: string,
    // redirection: () => void,
    dataTest?: string
}

const CardData: FC<Props> = ({ res, picture, dataTest }) => {
    return (
        <figure className="bg-transparent border-2 border-blue-700 rounded-xl my-5 p-5 w-2/3 mx-auto" key={res.id} data-testid={dataTest || ""}>
            <div className="flex justify-around items-center">
                <img className="object-contain w-20 h-20 rounded-full" src={picture} alt="Avatar" width="384" height="512" />
                <div className="text-center space-y-4 flex items-center">
                    <figcaption className="font-medium">
                        <div className="my-1 text-blue-600 text-lg">
                            {res.title}
                        </div>
                        <div className="my-1 text-white">
                            @{res.description}
                        </div>
                        {/* <div className="my-1 text-neutral-400 hover:text-neutral-200 cursor-pointer" onClick={redirection}>
                            Voir profil
                        </div> */}
                    </figcaption>
                </div>
            </div>
        </figure>
    )
}

export default CardData