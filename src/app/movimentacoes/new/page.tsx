import NavBar from "@/components/NavBar";
import { getLivros } from "@/app/actions/livros/getLivros";
import { Form } from "./Form";


export default async function CadastrarMovimentacoes() {
    const livros = await getLivros()

    return (
        <main className="flex min-h-screen  flex-col items-center">
            <NavBar active="movimentacoes" />

            <Form livros={livros} />
            
        </main>


    )
}