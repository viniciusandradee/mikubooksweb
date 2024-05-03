"use client"

import DropDownActions from "@/components/DropDownActions";
import { Icone } from "@/components/Icone";
import { create } from "domain";
import { toast } from "react-hot-toast";
import { destroy } from "../actions/livros/destroy";
import { useRouter } from "next/navigation";

interface LivroItemProps {
    livro: Livro
}

export function LivroItem({ livro }: LivroItemProps) {
    const router = useRouter()

    function handleDelete() {
        toast.promise(
            destroy(livro.id),
            {
                loading: "apagando...",
                success: "apagado com sucesso",
                error: "erro ao apagar",
            }
        );
    }

    return (
        <div className="flex justify-between p-2">
            <div className="flex gap-2 items-center">
                <Icone nome={livro.icone} />
                <span>{livro.nome}</span>
            </div>
            <DropDownActions
                onEdit={ () => router.push(`/livros/${livro.id}`) }
                onDelete={handleDelete}
            />
        </div>
    )
}