'use server'

export async function getLivros() {
    const resp = await fetch(process.env.API_BASE_URL + "/livro", { next: { revalidate: 0 } })
    return await resp.json()
}