
const url=`http://172.16.3.94:8080/user/`

const fetchMssql=async(servicio)=>{
 const data=await fetch(url+servicio)
    .then(data=>{
        const respuesta=data.json()
        return respuesta
    }).catch((error)=>console.log(error))
    return data
}



export default fetchMssql