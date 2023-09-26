import { useState } from "react"
import { useFormContext } from "react-hook-form"
interface ITab {
    id: number,
    label: string,
    status: boolean,
    key: string,
    table: React.ReactNode
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
interface ITabComponent {
    tabsComponent: ITab[]
}
export const TabComponent = ({ tabsComponent }: ITabComponent) => {
    const { formState } = useFormContext()

    const [tabs, setTabs] = useState<ITab[]>(tabsComponent)
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
    const validateGrid = (key: any) => key?.message || key?.root ? true : false
    return (

        <>
            <div className={`mb-4 border-b border-gray-200 dark:border-gray-700`}>
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    {tabs.map((tab) =>
                        <li className="mr-2" role="presentation">
                            <button onClick={() => handleClick(tab)} className={`inline-block p-4 border-b-2 ${tab.status ? validateGrid(formState.errors?.[tab.key]) ? 'border-red-300 text-red-500' : 'border-gray-300 text-gray-500' : 'border-transparent'} rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`} id="profile-tab" type="button">{tab.label}</button>
                        </li>
                    )}
                </ul>
                {tabs.map((tab) => tab.status && tab.table)}
            </div>
        </>
    )
}
