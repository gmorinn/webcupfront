import { FC } from "react";
import NameUser from '../atoms/NameUser'

type Props = {
    name: string,
}

const UserInformation: FC<Props> = ({ name }) => {
    return (
        <div className="mt-2 relative">
            <NameUser>{name}</NameUser>
        </div>
    )
}

export default UserInformation