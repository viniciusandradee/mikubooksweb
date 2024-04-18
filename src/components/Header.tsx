import Link from "next/link";
import "../app/CSS/header.css"

import HatsuneMiku from "../app/assets/hatsune-miku 1.png";
import iconLogo from "../app/assets/logoIcon.png"

export default function Header() {
    return (
        <>
            <header className="header">
                <img src={HatsuneMiku.src} className="hatsuneMiku" alt="Hatsune Miku"></img>
                <h1 className="tituloProjeto">Miku Books</h1>
                <h1 className="hifem">-</h1>
                <h1 className="tituloPagina">My List</h1>
                <img src={iconLogo.src} className="iconLogo" alt=""></img>
            </header>
            
        </>
    );
};
