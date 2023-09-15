import { useParams } from "react-router-dom"

export const Detalhes2 = () => {
    const { id } = useParams()
    return (
        <p>form de contato {id}</p>
    )
}
