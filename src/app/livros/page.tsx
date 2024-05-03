import NavBar from "@/components/NavBar";
import { LivroItem } from "./LivroItem";
import { Button } from "@nextui-org/button";
import { Plus } from "lucide-react";
import { getLivros } from "../actions/livros/getLivros";
import Link from "next/link";

interface Livro {
    id: number,
    nome: string,
    icone: string,

}


export default async function Livros() {

  const livros: Livro[] = await getLivros()

  return ( 
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="livros" />

      <section className="flex flex-col gap-2 bg-teal-500 min-w-[600px] mt-4 p-2 rounded">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Livros Cadastrados</h2>
          <Link href="/livros/new">
            <Button color="secondary" startContent={<Plus />}>Novo Livro</Button>
          </Link>
        </div>
        
        {livros.map(livro =>
          <LivroItem livro={livro} />
        )}
        
      </section>



    </main>

    
  );
}
