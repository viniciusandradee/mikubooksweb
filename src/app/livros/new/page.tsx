"use client"

import { create } from "@/app/actions/livros/create";
import { icones } from "@/app/utils/Icones";
import { Icone } from "@/components/Icone";
import NavBar from "@/components/NavBar";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@nextui-org/button";
import { Autocomplete, AutocompleteItem, Input } from "@nextui-org/react";
import Link from "next/link";
import { useFormState } from "react-dom";

const initialState = {
    message: '',
}

export default function CadastrarLivro() {
    const [state, formAction] = useFormState(create, initialState)

    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="livros" />

            <form action={formAction} className="flex flex-col gap-3 m-6 bg-teal-500 rounded p-6 min-w-[500px]">
                <h2 className="text-2xl font-bold">Adicionar novo livro</h2>
                <Input
                    key="nome"
                    label="Nome"
                    name="nome"
                    variant="bordered"
                    color="primary"
                    labelPlacement={"outside"}
                    isInvalid={state?.message != ''}
                    errorMessage={state?.message}
                />

                <Autocomplete
                    defaultItems={icones}
                    label="Categoria do livro"
                    name="icone"
                    variant="bordered"
                    color="primary"
                    labelPlacement={"outside"}
                    
                >
                    {(icone) => <AutocompleteItem key={icone.nome} startContent={<Icone nome={icone.nome} />}>{icone.nome}</AutocompleteItem>}
                </Autocomplete>

                <div className="flex justify-around mt-4">
                    <Link href="/livros">
                        <Button  variant="bordered" color="primary" >Cancelar</Button>
                    </Link>
                    <SubmitButton></SubmitButton>
                </div>
            </form>
        </main>


    )
}