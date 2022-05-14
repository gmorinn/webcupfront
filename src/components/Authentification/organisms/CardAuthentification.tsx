import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Button";
import Slogan from "../atoms/Slogan";
import Title from "../atoms/Title";
import Clock from '../../../assets/clock.png'
import SpaceInvader from '../../../assets/spaceinvader.png'
import Fire from '../../../assets/fire_planet.png'

const Card: FC = () => {
    const navigate = useNavigate()

    return (
        <div className="w-full">
            <div className="fixed left-0 top-0">
                <img src={SpaceInvader} className="h-24 m-5 md:m-12 md:h-36 lg:h-64 mb-16" alt="img"/>
            </div>
            <div className="absolute bottom-0 right-0 ">
                <img src={Fire} className="h-24 md:h-36 lg:h-64 mr-4 mb-16" alt="img"/>
            </div>
            <div className="fixed w-full text-white mt-64 flex flex-col items-center justify-content-center">
                <img style={{animation: `spin ${3}s linear infinite`}} src={Clock} className="h-32 mr-4 mb-16" alt="img"/>
                <Title>WEBTIME</Title>
                <Slogan>Il y a 5 000 ans...</Slogan>
                <Button
                    disable={false}
                    action={() => navigate('/home')}
                    styles="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-3xl text-xs md:text-lg px-5 py-2.5 text-center mt-9 mb-2"
                >
                Remonter dans le temps
                </Button>
            </div>
        </div>
    )
}

export default Card