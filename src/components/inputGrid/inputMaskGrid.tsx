import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form"
import { PatternFormat } from "react-number-format";
import { ErrorIcon } from "../../assets/icons/error";
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
    cep: "#####-###",
    telefone: "(##)#####-####"
}
export const InputMaskGrid = ({ name, format, errorMessage, placeholder }: IInputMaskGrid) => {
    const {
        control
    } = useFormContext();
    return (
        <div className="flex relative">

            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <PatternFormat format={formats[format]} style={{ width: "200px" }} placeholder={errorMessage ? errorMessage : placeholder} {...field} id={name} className={` text-sm border-none block w-full p-2.5 text-gray-900 placeholder-gray-700 focus:border-none focus:ring-none dark:placeholder-gray-500 py-4 h-full  ${errorMessage && 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700  font-normal focus:border-red-500 focus:ring-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'}`} />
                )}
            />
            {errorMessage && <ErrorIcon />}
        </div>
    )
}
