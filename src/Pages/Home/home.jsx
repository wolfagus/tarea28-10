import axios from 'axios';
import React, { useEffect, useState } from "react"
import Card from '../../components/Card/Card';


const Home = () => {
    const [usuario, setUsuario] = useState([])
    const [error, setError] = useState(false)
    const FetchUsuario = async () => {
        try {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsuario(data)
            setError(false)
        } catch (error) {
            setError(true)
        }
    }
    useEffect(() => {
        FetchUsuario();
    },[])
    return (
        <div className="container">
            <div className="row">
                <h1 className='text-center'>Usarios registrados</h1>
                {error && (
                    <div>
                        <h4 className="text-danger font-weight-700">Los usuarios no están disponibles</h4>
                    </div> 
                )}
                <div className="row justify-content-center ">
                    {usuario.map((user) => (<Card key={user.id} id={user.id} name={user.name} email={user.email} phone={user.phone} />))}
                </div>
            </div>
        </div> )}

export default Home