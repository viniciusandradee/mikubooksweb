'use client'

import { Select, SelectItem } from "@nextui-org/react";
import { ChangeEventHandler } from "react";
import { Icone } from "./Icone";

interface LivroSelectProps  {
    livros: Array<Livro>,
    onChange?: ChangeEventHandler
}

export function LivroSelect({livros, onChange}: LivroSelectProps) {

    return (
        <Select
            items={livros}
            label="Livro"
            variant="bordered"
            name="livro"
            placeholder="Selecione uma livro"
            labelPlacement="outside"
            onChange={onChange}
        >
            {(livro) => 
                <SelectItem key={livro.id} startContent={<Icone nome={livro.icone} />}>
                    {livro.nome}
                </SelectItem>
            }
        </Select>
    )
}