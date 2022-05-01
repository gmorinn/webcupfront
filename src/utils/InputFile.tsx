import { UUID } from "../utils/types"
import { useApi } from '../hooks/useApi';
import { forwardRef, useState } from 'react';
import Err from './humanResp';
import { displayError } from './toastMessage';

type FileProps = {
    id: UUID,
    limit?: number,
    value: string,
    w?: number,
    h?: number,
    set: any,
    className?: string,
	hidden?: boolean,
	i?: number
}

type SuccessResult = {
    success: boolean,
    file: {
		url: string
	},
}

const InputFileBrowser = ({ id, limit, value, w, h, set, className, hidden, i }: FileProps, ref:any) => {
    const { Fetch } = useApi()
	const [err, setErr] = useState<String | null>(null)

    const uploadFile = async (e: React.ChangeEvent<any>): Promise<any> => {
		const files = e.target.files

		const formData = new FormData()
		formData.append('content', files[0])
		formData.append('size', files[0].size)

		if (w && h) {
			formData.append('w', String(w))
			formData.append('h', String(h))
		}
	
		if (limit) {
			let fileSize = 0
			if (files && files[0]) {
				fileSize = files[0].size
			}
			if (fileSize > limit) {
				displayError("Fichier trop lourd");
			} else {
				return Fetch(`/v1/bo/file/add`, "POST", formData, false).then((res:SuccessResult) => res?.success && res.success && set(i, res.file?.url))
			}
		} else {
			return Fetch(`/v1/bo/file/add`, "POST", formData, false).then((res:any) => res?.success && res.success ? set(i, res.file?.url) : setErr(Err(res)))
		}
	}

    const removeFile = async () => {
		return Fetch(`/v1/bo/file/remove`, "PATCH", { url: value })
			.then((res:SuccessResult) => res?.success && res.success && set(i, ""))
	}

    return (
		<>
			<input id={id} ref={ref} className={className} hidden={hidden} accept="image/png, image/jpg, image/jpeg" type="file" onChange={uploadFile} />
            {value && value !== "" && <small onClick={removeFile} className="lg:mb-0 mb-4 text-white text-center cursor-pointer flex justify-center">Supprimer l'image actuelle</small>}
			{err && <small className="text-red-600 text-center">{err}</small>}
		</>
    )
}

export default forwardRef(InputFileBrowser)