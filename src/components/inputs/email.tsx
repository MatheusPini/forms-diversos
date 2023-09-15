import { useFormContext } from "react-hook-form"
interface IEmailField {
    label: string
    name: string
    errorMessage?: string
    placeholder: string
}
export const EmailField = ({ label, name, errorMessage, placeholder }: IEmailField) => {
    const { register } = useFormContext()

    return (
        <>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                </span>
                <input type="text" {...register(name)} id={name} className={`rounded-none rounded-r-lg text-sm dark:bg-gray-700 block w-full p-2.5 ${errorMessage ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500' : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-700 focus:border-gray-500 focus:ring-gray-500 dark:text-gray-500 dark:placeholder-gray-500 dark:border-gray-500'}`} placeholder={placeholder} />
            </div>
            <p className="text-red-600">{errorMessage}</p>
        </>
    )
}
