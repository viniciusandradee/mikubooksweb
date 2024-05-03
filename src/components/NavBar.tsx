import Link from "next/link";
import hatsuneLogo from "../app/assets/hatsune-miku 1.png"

interface NavBarProps {
    active: "dashboard" | "movimentacoes" | "livros"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const classActive = "border-white-500 border-b-4 pb-2"

    return (
        <nav className="flex w-full justify-between items-center px-4 py-2 bg-teal-500">
            <img className="hatsuneLogo" src={hatsuneLogo.src} alt="" />
            <h1 className="text-4xl font-bold">MikuBooks</h1>
            <ul className="flex gap-16">
                <li className={active == "dashboard" ? classActive: ""}><Link href="/">Dashboard</Link></li>
                <li className={active == "movimentacoes" ? classActive: ""}><Link href="/movimentacoes">Movimentações</Link></li>
                <li className={active == "livros" ? classActive: ""}><Link href="/livros">Meus Livros</Link></li>
            </ul>
            <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
            </div>
        </nav>
    )
}