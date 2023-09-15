import { useFormContext } from "react-hook-form"

interface IInputTextField {
    icon?: React.ReactNode
    label: string
    name: string
    errorMessage?: string
    placeholder?: string
}
export const InputTextField = ({ icon = null, name, errorMessage, label, placeholder }: IInputTextField) => {
    const { register } = useFormContext()

    return (
        <>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <div className="flex">
                {icon && icon}
                <input type="text" {...register(name)} id={name} className={` text-sm dark:bg-gray-700  block w-full p-2.5 ${icon ? 'rounded-none rounded-r-lg' : 'rounded-lg'} ${errorMessage ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500' : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-700 focus:border-gray-500 focus:ring-gray-500 dark:text-gray-500 dark:placeholder-gray-500 dark:border-gray-500'}`} placeholder={placeholder} />
            </div>
            <p className="text-red-600">{errorMessage}</p>
        </>
    )
}
