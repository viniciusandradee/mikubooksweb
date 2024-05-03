'use server'

export async function get(livro?: any, mes?: number, page?: number) {
    if (!page) page = 1
    page = page - 1

    const queryParam = new URLSearchParams()
    if (livro) queryParam.append('livro', livro)
    queryParam.append('page', page.toString())

    const url = `${process.env.API_BASE_URL}/movimentacao?${queryParam.toString()}`
    const resp = await fetch(url, { next: { revalidate: 0 } })
    const json = await resp.json()
    console.log(json.totalPages)
    console.log(url)
    return json

}