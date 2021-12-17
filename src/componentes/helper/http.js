export default async function http(url,object = {}){
    try {
        const peticion = await fetch(url,object).then(res => {
            return res
        })
        const response = peticion.json()
        return response
        
    } catch (error) {
        return error
    }
}