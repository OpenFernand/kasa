/* Ce composant joue le role d'interface pour communiquer avec une base de données ou une API
   ou autre avec la methode fetch. N'importe quel composant pourra faire appel à cette fonction 
   (on peut changer de BDB, sans avoir a toucher aux composants). Il renvoie les données provenant du fetch */

export async function getApartments() {
    try {  
        const res = await fetch("/data.json")
        const resJSON = await res.json()
        return resJSON
    } catch (err) {
        console.error(err.message)
    }
}

/* Cette fonction, permet de renvoyer les données d'un seil appartement avec son ID provenant du fetch */

export async function getApartment(apartmentId) {
    try {  
        const list = await getApartments();
        return list.find((flat) => flat.id === apartmentId)
    } catch (err) {
        console.error(err.message)
    }
}

