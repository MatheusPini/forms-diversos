import { Controller, useFormContext } from "react-hook-form"
import { PatternFormat } from "react-number-format";
interface IInputMaskGrid {
    name: string
    format: string
    errorMessage?: string
    placeholder: string
}
interface IFormat {
    [key: string]: string
}
const formats: IFormat = {
    cep: "#####-##",
    telefone: "(##)#####-####"
}
export const InputMaskGrid = ({ name, format, errorMessage, placeholder }: IInputMaskGrid) => {
    const {
        control
    } = useFormContext();
    return (
        <>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <PatternFormat format={formats[format]} placeholder={placeholder} {...field} id={name} className={` text-sm dark:bg-gray-700  block w-full p-2.5 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-700 focus:border-gray-500 focus:ring-gray-500 dark:text-gray-500 dark:placeholder-gray-500 dark:border-gray-500 ${errorMessage ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700  font-normal focus:border-red-500 focus:ring-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500' : 'bg-gray-50 border  font-normal border-gray-300 text-gray-900 placeholder-gray-700 focus:border-gray-500 focus:ring-gray-500 dark:text-gray-500 dark:placeholder-gray-500 dark:border-gray-500'}`} />
                )}
            />
            <p className="text-red-600 font-normal">{errorMessage}</p>
        </>
    )
}
