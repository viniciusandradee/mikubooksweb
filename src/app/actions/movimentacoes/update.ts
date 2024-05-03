"use server"
import { redirect } from "next/navigation"

export async function update(prevState: any, formData: FormData) {
    const data = {
        nome: formData.get('nome'),
        icone: "apple",
    }
    const response = await fetch(`http://localhost:8080/livro/${formData.get('id')}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok) {
        return {
            message: 'Erro ao atualizar livro'
        }
    }

    if(response.ok){
        redirect('/livros')
    }
    
}