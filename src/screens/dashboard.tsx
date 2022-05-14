import { FC, useState } from "react";
import SearchSection from "../components/Dashboard/molecules/SearchSection";
import RecentSection from "../components/Dashboard/molecules/RecentSection";
import CreateSection from "../components/Dashboard/molecules/CreateSection";
import Unknown from '../assets/capsule.png'

const Dashboard: FC = () => {
    const [refresh, setRefresh] = useState<boolean>(false)
    console.log("==> ", refresh)
    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-zinc-900 via-slate-900 to-zinc-900">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <RecentSection refresh={refresh} img={Unknown} />
                <CreateSection refresh={setRefresh} />
                <SearchSection img={Unknown} />
            </div>
        </div>
    )
}

export default Dashboard