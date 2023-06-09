
const url=`http://localhost:8000/user/`

const fetchMssql=async(servicio)=>{
 const data=await fetch(url+servicio)
    .then(data=>{
        const respuesta=data.json()
        return respuesta
    }).catch((error)=>error)
    return data
}



export default fetchMssql