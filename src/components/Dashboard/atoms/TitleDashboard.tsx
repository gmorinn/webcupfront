import { FC } from "react";

type Props = {
    logo: string
}

const TitleDashboard: FC<Props> = ({ children, logo }) => {
    return (
        <>
            <h2 className="flex text-white justify-center items-center text-xl lg:text-2xl font-bold my-8">
                <img style={{animation: `spin ${3}s linear infinite`}} src={logo} className="h-20 mr-4" alt="img"/>
                {children}
            </h2>
        </>
    )
}

export default TitleDashboard