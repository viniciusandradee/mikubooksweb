import NavBar from "@/components/NavBar";
import { get } from "../actions/movimentacoes/get";
import { MovimentacaoData } from "./MovimentacaoData";
import { getLivros } from "../actions/livros/getLivros";

export default async function Movimentacoes() {
  const movimentacoes = await get()
  const livros: Array<Livro> = await getLivros()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="movimentacoes" />

      <MovimentacaoData 
        movimentacoes={movimentacoes} 
        livros={livros}
       />

    </main>

  );
}