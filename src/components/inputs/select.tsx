import { useFormContext } from "react-hook-form"

interface IInputSelectField {
    label: string
    name: string
    errorMessage?: string
}
export const SelectField = ({ name, errorMessage, label }: IInputSelectField) => {
    const { register } = useFormContext()

    return (<>
        <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
        <select id={name} {...register(name)} className={` text-sm dark:bg-gray-700  block w-full p-2.5 rounded-lg ${errorMessage ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500' : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-700 focus:border-gray-500 focus:ring-gray-500 dark:text-gray-500 dark:placeholder-gray-500 dark:border-gray-500'}`}>
            <option selected>Selecione</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
        </select>
        <p className="text-red-600">{errorMessage}</p>
    </>)
}
