import { getById } from "@/app/actions/livros/getById";
import NavBar from "@/components/NavBar";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { EditForm } from "./EditForm";

export default async function EditarLivro({params}: Params) {
    const {id} = params
    const livro = await getById(id)

    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="livros" />

            <EditForm {...livro} />
            
        </main>
    )
}