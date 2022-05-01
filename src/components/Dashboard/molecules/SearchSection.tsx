import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardUser from "../atoms/CardUser";
import InputSearchUser from "../atoms/InputSearchUser";
import { SmallUser } from "../../../utils/types";
import { useApi } from "../../../hooks/useApi";
import TitleDashboard from "../atoms/TitleDashboard";
import Search from '../../../assets/icons/search.svg'

type Props = {
    img: string
}

const SearchSection: FC<Props> = ({ img }) => {
    const [value, setValue] = useState<string>("")
    const [users, setUsers] = useState<SmallUser[] | null>(null)
    const navigate = useNavigate()

    const { Fetch, loading } = useApi()

    useEffect(() => {
        if (value.length > 2 && !loading) {
            Fetch(`/v1/web/public/user/search`, "PATCH", {key: value})
                .then((res:any) => {
                    if (res?.success && res?.users) {
                        setUsers(res.users)
                    }
                })
        } else if (value.length < 1) setUsers(null)
        // eslint-disable-next-line
    }, [value])


    return (
        <div id="Research">
            <TitleDashboard logo={Search}>Recherchez un profil</TitleDashboard>
            <InputSearchUser 
                placeholder="Entrez un mot clé..."
                value={value}
                setValue={setValue}
            />
            { users && users.length > 0 && users.map((v, i) => {
                return (
                    <CardUser
                        key={v.id}
                        user={v}
                        dataTest={`search-user-${i}`}
                        picture={v.avatar ? process.env.REACT_APP_API_URL + v.avatar : img}
                        redirection={() => navigate(`/profile/${v.username}`)}
                    />
                )
            })
        }
        </div>
    )
}

export default SearchSection