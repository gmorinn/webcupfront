import { FC } from "react";
import Broken from '../../../assets/broken.png'

const TitleContact: FC = () => {
    return (
        <h2 className="text-white text-center text-2xl lg:text-3xl font-bold my-8 text-left">
            <span>
                Signalez un bug !
            </span>
            <img src={Broken} alt="Broke" className="h-24 md:h-36 lg:h-64 mx-auto" />
        </h2>
    )
}

export default TitleContact