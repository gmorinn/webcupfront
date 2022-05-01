import { UUID } from "./types"
import { useApi } from '../hooks/useApi';
import { forwardRef, useState } from 'react';
import Err from './humanResp';
import { displayError } from './toastMessage';

type FileProps = {
    id: UUID,
    limit: number,
    value: string,
    w?: number,
    h?: number,
    set: any,
	hidden?: boolean
    className?: string
}

type FileResult = {
    url: string
}

type SuccessResult = {
    success: boolean,
    file: FileResult,
}

const InputFileBrowser = ({ id, limit, value, w, h, set, className, hidden }: FileProps, ref:any) => {

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
				displayError("Fichier trop lourd.");
			} else {
				return Fetch(`/v1/bo/file/add`, "POST", formData, false).then((res:SuccessResult) => res?.success && res.success && set(res.file?.url))
			}
		} else {
			return Fetch(`/v1/bo/file/add`, "POST", formData, false).then((res:any) => res?.success && res.success ? set(res.file?.url) : setErr(Err(res)))
		}
	}

    const removeFile = async () => {
		return Fetch(`/v1/bo/file/remove`, "PATCH", { url: value })
			.then((res:SuccessResult) => res?.success && res.success && set(null))
			.catch(() => set(null))
	}

    return (
		<>
			<input id={id} ref={ref} className={className} hidden={hidden} accept="image/png, image/jpg, image/jpeg" type="file" onChange={uploadFile} />
            {value && <small onClick={removeFile} className="text-white text-center cursor-pointer">Supprimer l'image actuelle</small>}
			{err && <small className="text-red-600 text-center">{err}</small>}
		</>
    )
}

export default forwardRef(InputFileBrowser)