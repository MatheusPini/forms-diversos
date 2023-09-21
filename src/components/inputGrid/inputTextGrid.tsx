import { useFormContext } from "react-hook-form"
import { ErrorIcon } from "../../assets/icons/error"
interface IInputTextGrid {
    name: string
    placeholder: string
    errorMessage?: string
}
export const InputTextGrid = ({ name, placeholder, errorMessage }: IInputTextGrid) => {
    const { register } = useFormContext()

    return (
        <>
            <div className="flex relative">
                <input type="text" {...register(name)} id={name} className={` text-sm border-none block w-full p-2.5 text-gray-900 placeholder-gray-700 focus:border-none focus:ring-none dark:placeholder-gray-500 py-4 h-full  ${errorMessage && 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700  font-normal focus:border-red-500 focus:ring-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'}`} placeholder={placeholder} />
                {errorMessage && <ErrorIcon />}
            </div>
        </>
    )
}
