export async function obtenerPersonajes() {


    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()
    return { results: resultado.results, info: resultado.info }
}


export async function obtenerPersonaje(id) {


    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}