import { useFormContext } from "react-hook-form"
interface IInputTextGrid {
    name: string
    placeholder: string
    errorMessage?: string
}
export const InputTextGrid = ({ name, placeholder, errorMessage }: IInputTextGrid) => {
    const { register } = useFormContext()

    return (
        <>
            <input type="text" {...register(name)} id={name} className={` text-sm dark:bg-gray-700  block w-full p-2.5 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-700 focus:border-gray-500 focus:ring-gray-500 dark:text-gray-500 dark:placeholder-gray-500 dark:border-gray-500 ${errorMessage ? 'bg-red-50 border border-red-500  font-normal text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500' : ' font-normal bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-700 focus:border-gray-500 focus:ring-gray-500 dark:text-gray-500 dark:placeholder-gray-500 dark:border-gray-500'}`} placeholder={placeholder} />
            <p className="text-red-600 font-normal">{errorMessage}</p>
        </>
    )
}
