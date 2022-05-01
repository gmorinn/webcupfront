import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Button";
import Slogan from "../atoms/Slogan";
import Title from "../atoms/Title";

const Card: FC = () => {
    const navigate = useNavigate()

    return (
        <div className="text-white fixed w-1/2 flex flex-col items-center justify-content-center" style={{position:'fixed', top: '45%', left: '50%', transform: "translate(-50%, -50%)"}}>
            <Title>WEBCUP</Title>
            <Slogan>Thème: </Slogan>
            <Button
                disable={false}
                action={() => navigate('/home')}
                styles="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xs md:text-lg px-5 py-2.5 text-center mt-9 mb-2"
            >
                Commencez!
            </Button>
        </div>
    )
}

export default Card