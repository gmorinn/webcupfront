import { FC, useEffect, useRef, useState } from "react";
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
import InputFileBrowser from "../../../utils/InputFileAvatar";

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
    const inputEl = useRef<HTMLInputElement>(null);
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
                image: image,
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
                            focus:text-gray-700 focus:bg-white focus:border-rose-600 focus:outline-none" aria-label="Default select example">
                                <option value="robotics">Robotique</option>
                                <option value="space">Espace</option>
                                <option value="brain">Cerveau</option>
                                <option value="animals">Animal</option>
                                <option value="autre">Autre</option>
                            </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:gap-5">
                    <label htmlFor={"image"} className="text-white w-full text-md">Importer votre image:</label>
                    {image !== "" && <img src={process.env.REACT_APP_API_URL + image} alt="test" className="h-64" />}
                    <InputFileBrowser
                        id="image"
                        value={image}
                        limit={314572}
                        className=""
                        ref={inputEl}
                        set={setImage}
                    />
                </div>
                <div className="w-full h-8">
                    {error && <span className="block text-red-500 text-sm my-3">{error}</span>}
                    <ButtonInput loading={loading}>Valider</ButtonInput>
                </div>
            </form>
        </div>
    )
}

export default CreateSection