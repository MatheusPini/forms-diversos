import { useState } from "react"

interface ITab {
    id: number,
    label: string,
    status: boolean
}
interface ITabComponent {
    labelTab: string
    children: React.ReactNode
}
export const TabComponent = () => {
    const [tabs, setTabs] = useState<ITab[]>([
        {
            id: 1,
            label: "Tab 1",
            status: true
        },
        {
            id: 2,
            label: "Tab 2",
            status: false
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
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    {tabs.map((tab) =>
                        <li className="mr-2" role="presentation">
                            <button onClick={() => handleClick(tab)} className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg`} id="profile-tab" type="button">{tab.label}/{JSON.stringify(tab.status)}</button>
                        </li>
                    )}
                </ul>
                {tabs.map((tab) =>
                    <div className={`${!tab.status && 'hidden'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} id="profile">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Product name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Color
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Category
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Apple MacBook Pro 17"
                                        </th>
                                        <td className="px-6 py-4">
                                            Silver
                                        </td>
                                        <td className="px-6 py-4">
                                            Laptop
                                        </td>
                                        <td className="px-6 py-4">
                                            $2999
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
