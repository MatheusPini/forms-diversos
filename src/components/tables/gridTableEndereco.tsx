import { Controller, FieldError, useFormContext } from "react-hook-form"
import { PatternFormat } from "react-number-format";
import { InputMaskGrid } from "../inputGrid/inputMaskGrid";
import { InputTextGrid } from "../inputGrid/inputTextGrid";
type TTipo = IEndereco | IDocs
interface ITableGridEndereco {
    gridsBody?: IEndereco[]
}
interface IEndereco {
    cep: string
    bairro: string
    complemento: string
}
interface IDocs {
    tipoDocumento: string
    nDoc: string
}
interface IForm1 {
    first_name: string
    last_name: string
    email: string
    phone: string
    enderecos?: IEndereco[]
    docs?: IDocs[]
}
export const TableGridEndereco = ({ gridsBody }: ITableGridEndereco) => {
    const { formState, getValues } = useFormContext()
    const formatDynamicGrid = (grid: TTipo) => {

        return Object.entries(grid)
    }
    console.log(getValues())
    return (
        <div className={` p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                cep
                            </th>
                            <th scope="col" className="px-6 py-3">
                                bairro
                            </th>
                            <th scope="col" className="px-6 py-3">
                                complemento
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {getValues()?.enderecos.map((_endereco: IEndereco, index: number) =>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th className="px-6 py-4">
                                    <InputMaskGrid placeholder="CEP..." format={"cep"} name={`enderecos[${[index]}].cep`} errorMessage={formState?.errors?.enderecos?.[index]?.cep?.message} />
                                </th>
                                <th className="px-6 py-4">
                                    <InputTextGrid placeholder="Bairro..." name={`enderecos[${[index]}].bairro`} errorMessage={formState?.errors?.enderecos?.[index]?.bairro?.message} />
                                </th>
                                <th className="px-6 py-4">
                                    <InputTextGrid placeholder="Complemento..." name={`enderecos[${[index]}].complemento`} errorMessage={formState?.errors?.enderecos?.[index]?.complemento?.message} />
                                </th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div >
    )
}
