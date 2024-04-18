import Link from "next/link";

import miku2 from "../app/assets/miku2.png"
import lupa from "../app/assets/lupa.png"

import "../app/CSS/navbar.css"

interface NavBarProps {
    active: "dashboard" | "movimentacoes" | "categorias"
}

export default function NavBar() {
    return (
    <nav className="navbar">
    
    <ul className="">
        <li className="nav-item"><Link className="allbooks" href="/">All Books</Link></li>
        <li className="nav-item"><Link className="creading" href="/">Currently Reading</Link></li>
        <li className="nav-item"><Link className="completed" href="/">Completed</Link></li>
        <li className="nav-item"><Link className="plantoread" href="/">Plan to Read</Link></li>
        <li><Link className="addnewbook" href="/livros">Add New Book</Link></li>
    </ul>
    
    <input type="text" placeholder="Search..." className="search-bar"/>
    
    <img src={miku2.src} alt="" />
    </nav>
    
    )
    }