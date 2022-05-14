import { FC, useEffect, useState } from "react";
import TitleDashboard from "../atoms/TitleDashboard";
import Alien from '../../../assets/alien.png'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useApi } from "../../../hooks/useApi";
import { Category } from "../../../utils/types";
import { displaySuccess } from "../../../utils/toastMessage";
import Err from "../../../utils/humanResp";
import GroupInputData from "../atoms/GroupInputData";
import { useAuth } from "../../../hooks/useAuth";
import ButtonInput from "../atoms/ButtonForm";

type FormValues = {
    title: string,
    description: string,
    category: Category,
}

type Props = {
    refresh: any
}

const CreateSection: FC<Props> = ({ refresh }) => {
    const [error, setError] = useState<string | null>(null)
    const [image, setImage] = useState<string>("")
    const [category, setCategory] = useState<Category>("robotics")
    const { Fetch, loading } = useApi()
    const { getUser } = useAuth()

    const schema = yup.object({
        title: yup.string().required().min(3),
        description: yup.string().required().min(3).max(200),
    });

    const { handleSubmit, control, formState: { errors, isSubmitSuccessful }, reset } = useForm<FormValues>({
        resolver: yupResolver(schema),
        defaultValues: {
            title: "",
            description: "",
        },
    });

    const onSubmit:SubmitHandler<FormValues> = data => {
        setError(null)
        Fetch('/web/data/add', "POST", {
            data: {
                title: data.title,
                description: data.description,
                category: category,
                user_id: getUser().id,
                image: "",
            }
        })
            .then((res:any) => {
                if (res?.success && res?.data) {
                    displaySuccess("Votre objet est protégé.")
                    refresh((v:boolean) => !v)
                } else setError(Err(res))
            })
    }

    useEffect(()=> {
        if (isSubmitSuccessful) {
            reset()
        }
    // eslint-disable-next-line
    }, [isSubmitSuccessful])


    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e?.target?.value as Category)
    }

    return (
        <div id="Create">
            <TitleDashboard logo={Alien}>Une ancienne donnée à sauvegarder ?</TitleDashboard>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="mt-4 lg:w-full w-2/3 mx-auto" id="form-names">
                <GroupInputData control={control} errors={errors} />
                <div className="grid grid-cols-1 md:gap-5">
                    <div className="flex justify-center flex-col">
                        <label htmlFor={"category"} className="text-white w-full text-md mb-5">Sélectionner un type</label>
                            <select onChange={handleChange}
                            value={category}
                            className="form-select appearance-none
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            mb-10
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option value="robotics">Robotique</option>
                                <option value="space">Espace</option>
                                <option value="brain">Cerveau</option>
                                <option value="animals">Animal</option>
                            </select>
                        </div>
                </div>
                <div className="w-full h-8">
                    {error && <span className="block text-white text-sm mb-1">{error}</span>}
                    <ButtonInput loading={loading}>Valider</ButtonInput>
                </div>
            </form>
        </div>
    )
}

export default CreateSection