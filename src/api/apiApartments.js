/* Ce composant joue le role d'interface pour communiquer avec une base de données ou une API
   ou autre avec la methode fetch. N'importe quel composant pourra faire appel à cette fonction 
   (on peut changer de BDB, sans avoir a toucher aux composants). Il renvoie les données provenant du fetch */

export async function getApartments() {
    try {
        const res = await fetch("data.json")
        const resJSON = await res.json()
        console.log('resJSON de mon API', resJSON)
        return resJSON
    } catch (err) {
        console.error(err.message)
    }
}
