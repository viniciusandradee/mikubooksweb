"use server"
export async function getById(id: number) {
    const response = await fetch(`http://localhost:8080/livro/${id}`)

    if (!response.ok) {
        throw new Error('Livro não encontrada')
    }

    return await response.json()
}