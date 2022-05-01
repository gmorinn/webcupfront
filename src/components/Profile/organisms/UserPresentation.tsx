import { FC } from "react";
import Unknown from '../../../assets/unknown.png'
import Avatar from "../atoms/Avatar";
import UserInformation from "../melocules/UserInformation";


type Props = {
    name: string,
    picture: string | null,
}

const UserPresentation: FC<Props> = ({ name, picture }) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <Avatar
                picture={picture ? process.env.REACT_APP_API_URL+picture : Unknown}
                styles="object-cover w-20 h-20 mr-2 rounded-full"
                alt="Avatar"
            />
            <UserInformation name={name} />
        </div>
    )
}

export default UserPresentation