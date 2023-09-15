import { Link } from "react-router-dom"

export const Detalhes = () => {
    return (<div>
        <h1>pagina de contatos</h1>
        <p>
            <Link to="/detalhes/1">Form de contato 1</Link>
        </p>
        <p>
            <Link to="/detalhes/2">Form de contato 2</Link>
        </p>
        <p>
            <Link to="/detalhes/3">Form de contato 3</Link>
        </p>
    </div>)
}
