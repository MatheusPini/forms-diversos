import { Controller, FieldError, useFieldArray, useFormContext } from "react-hook-form"
import { PatternFormat } from "react-number-format";
import { InputMaskGrid } from "../inputGrid/inputMaskGrid";
import { InputTextGrid } from "../inputGrid/inputTextGrid";
import { TrashIcon } from "../../assets/icons/trash";

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
    enderecos: IEndereco[]
    docs: IDocs[]
}
export const TableGridDocs = () => {
    const { formState, control } = useFormContext()
    const { fields, insert, remove } = useFieldArray({
        control: control,
        name: "docs"
    })
    return (
        <div className={` p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}>
            <div className="relative overflow-x-auto max-h-80 h-80">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-y-scroll">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Tipo do documento
                            </th>
                            <th scope="col" className="px-6 py-3">
                                N° do documento
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody style={{ width: "400px" }}>
                        {fields.map((item, index) =>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.id}>
                                <th className="">
                                    <InputTextGrid placeholder="Tipo de documento..." name={`docs.${index}.tipoDocumento`} errorMessage={formState?.errors?.docs?.[index]?.tipoDocumento?.message} />
                                </th>
                                <th className="">
                                    <InputTextGrid placeholder="Documento..." name={`docs.${index}.nDoc`} errorMessage={formState?.errors?.docs?.[index]?.nDoc?.message} />
                                </th>
                                <th className="">
                                    <div className="flex gap-2">
                                        <TrashIcon onClick={() => remove(index)} />
                                    </div>
                                </th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <button onClick={() => insert(2, {
                tipoDocumento: '',
                nDoc: ''
            })} className="flex w-25 items-center justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600" type="button">Remover</button>
        </div >
    )
}
