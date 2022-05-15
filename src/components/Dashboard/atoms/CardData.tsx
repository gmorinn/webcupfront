import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { EmptyString } from "../../../utils/checkValue";
import { Data } from "../../../utils/types";

type Props = {
    res: Data,
    picture: string,
    // redirection: () => void,
    dataTest?: string
}

const CardData: FC<Props> = ({ res, picture, dataTest }) => {
    const navigate = useNavigate()
    return (
        <figure className="bg-transparent border-2 border-rose-500 rounded-xl my-5 p-5 w-2/3 mx-auto bock" key={res.id} data-testid={dataTest || ""}>
            <div className="flex justify-around items-center bock">
                <img className="object-contain w-20 h-20 rounded-full" src={picture} alt="Avatar" width="384" height="512" />
                <div className="text-center space-y-4 flex items-center">
                    <figcaption className="font-medium bock">
                        <div className="my-1 text-rose-600 text-lg break-all">
                            {res.title}
                        </div>
                        <div className="my-1 text-white break-all">
                            {res.description}
                        </div>
                        <div className="my-1 text-white">
                            Type: {res.category === "animals" ? "Animal" : res.category === "brain" ? "Cerveau" : res.category === "robotics" ? "Robotique" : res.category === "space" ? "Espace" : "Autre"}
                        </div>
                        <div className="my-1 text-neutral-400 hover:text-neutral-200 cursor-pointer" onClick={() => navigate("/data/"+EmptyString(res.id))}>
                            Voir plus
                        </div>
                    </figcaption>
                </div>
            </div>
        </figure>
    )
}

export default CardData