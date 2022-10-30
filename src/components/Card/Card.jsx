import React from 'react'
import {useNavigate } from 'react-router-dom'

const Card = ({ name, email, phone, id }) => {
    const navigate = useNavigate();
    const redirectTo = () => {
        navigate(`/detail/${id}`)
    }
    return (
        <div className="card m-3 " style={{width: '18rem'}}>

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Email: {email} Celular: {phone} </p>
                <button onClick={redirectTo} className='btn btn-success '>Ver mas</button>
            </div>
        </div>
    )
}

export default Card