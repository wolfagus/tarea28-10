import { useEffect, useState } from "react";
import { useParams} from "react-router-dom"
import axios from 'axios';

const Detail = () => {
    const  {id} = useParams();
    const [usuario, setUsuario] = useState({})

    useEffect(() => {
      const fetchUsuario = async () =>{
        try {
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUsuario(data)
        } catch (error) {
            console.log(error)
        }
    } 
    fetchUsuario ();
    }, [id])
    
   
  return (
    <div className="container">
        <div className="row"> 
        <h1>{usuario?.name}</h1> 
        <p>Email: {usuario.email}</p>
        <p>Celular: {usuario.phone} </p>
        <p>Web: {usuario.website} </p>
        <p>Domicilio: {usuario?.address?.street} {usuario?.address?.suite} ciudad de {usuario?.address?.city}  </p>  
        </div>
         
    </div>
  )
}

export default Detail