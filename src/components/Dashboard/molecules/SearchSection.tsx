import { FC, useEffect, useState } from "react";
import CardData from "../atoms/CardData";
import InputSearchData from "../atoms/InputSearchData";
import { Data } from "../../../utils/types";
import { useApi } from "../../../hooks/useApi";
import TitleDashboard from "../atoms/TitleDashboard";
import Search from '../../../assets/vaisseaux.png'

type Props = {
    img: string
}

const SearchSection: FC<Props> = ({ img }) => {
    const [value, setValue] = useState<string>("")
    const [data, setdata] = useState<Data[] | null>(null)

    const { Fetch, loading } = useApi()

    useEffect(() => {
        if (value.length > 2 && !loading) {
            Fetch(`/web/data/search`, "PATCH", {key: value})
                .then((res:any) => {
                    if (res?.success && res?.data) {
                        setdata(res.data)
                    }
                })
        } else if (value.length < 1) setdata(null)
        // eslint-disable-next-line
    }, [value])


    return (
        <div id="Research">
            <TitleDashboard logo={Search}>Recherchez un objet</TitleDashboard>
            <InputSearchData
                placeholder="Entrez un mot clé..."
                value={value}
                setValue={setValue}
            />
            { data && data.length > 0 && data.map((v, i) => {
                return (
                    <CardData
                        key={v.id}
                        res={v}
                        dataTest={`search-data-${i}`}
                        picture={v.image ? process.env.REACT_APP_API_URL + v.image : img}
                    />
                )
            })
        }
        </div>
    )
}

export default SearchSection