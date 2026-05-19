import {Link} from "react-router-dom"
import "./header.css"
export default function Header(){
    return(
        <header>
            <nav>
                <Link to="/">Home</Link>{"|"}
                <Link to="/quemsomospage">QuemSomos</Link>{"|"}
                <Link to="/cadastrofrutaspage">Frutas</Link>{"|"}
                <Link to="/Produtos">Produtos</Link>
            </nav>
        </header>
    )
}