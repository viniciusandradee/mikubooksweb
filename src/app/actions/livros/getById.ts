'use server'

export async function getById(id: number) {
    const resp = await fetch(`${process.env.API_BASE_URL}/livro/${id}`, { next: { revalidate: 0 } })

    if (!resp.ok){
        throw new Error("livro não encontrado")
    }

    return await resp.json()
}