import { useState } from "react"
import { TableGridEndereco } from "./tables/gridTableEndereco"
import { useFormContext } from "react-hook-form"
import { TableGridDocs } from "./tables/gridTableDocs"
interface ITab {
    id: number,
    label: string,
    status: boolean,
    table: React.ReactNode
}
interface ITabComponent {
    labelTab: string
    children: React.ReactNode
}
enum ETipos {
    cnh = 1,
    rg = 2,
    tituloEleitor = 3,
    cpf = 4,
    ativo = 5,
    inativo = 6
}
enum ETipoDocs {
    "CNH" = ETipos.cnh,
    "RG" = ETipos.rg,
    "Título de eleitor" = ETipos.tituloEleitor,
    "CPF" = ETipos.cpf,
}
export const TabComponent = () => {
    const { formState } = useFormContext()

    const [tabs, setTabs] = useState<ITab[]>([
        {
            id: 1,
            label: "Endereços",
            status: true,
            table: <TableGridEndereco />
        },
        {
            id: 2,
            label: "Documentações",
            status: false,
            table: <TableGridDocs />
        }
    ])
    const handleClick = (tab: ITab) => {
        const newTabs = tabs.map((t) => {
            if (t.id === tab.id) {
                t.status = true;

            } else {
                t.status = false;
            }
            return t;
        });

        setTabs(newTabs);
    };
    return (

        <>
            <div className={`mb-4 border-b border-gray-200 dark:border-gray-700`}>
                {formState.errors.enderecos?.message && <p className="text-red-600">! Pelo menos 1 endereço precisa ser adicionado</p>}
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    {tabs.map((tab) =>
                        <li className="mr-2" role="presentation">
                            <button onClick={() => handleClick(tab)} className={`inline-block p-4 border-b-2 ${tab.status ? 'border-gray-300' : 'border-transparent'} rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`} id="profile-tab" type="button">{tab.label}</button>
                        </li>
                    )}
                </ul>
                {tabs.map((tab) => tab.status && tab.table)}
            </div>
        </>
    )
}
