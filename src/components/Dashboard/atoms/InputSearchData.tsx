import React, { FC } from "react";

type Props = {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    placeholder: string,
    label?: string
}

const InputSearchData: FC<Props> = ({ value, setValue, placeholder, label }) => {
    return (
        <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
                {label !== undefined && <label htmlFor="search" className="form-label inline-block mb-2 text-white">{label}</label>}
                <input
                    type="search"
                    autoComplete="off"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-transparent
                        border-b-2 border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-rose-500 focus:border-rose-500 focus:outline-none
                    "
                    id="search"
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default InputSearchData