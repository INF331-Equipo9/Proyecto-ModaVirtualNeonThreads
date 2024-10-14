import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [Datos, setDatos] = useState({
        Correo: "",
        Contraseña: "",
    });

    const navigate = useNavigate();

    const [errors, setErrors] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors("");

        try {
            const response = await axios.post('http://localhost:5000/Login', Datos);
            console.log("Respuesta del servidor:", response);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('tipo', response.data.tipo);

            navigate(`/`);
        } catch (error) {
            console.log(error)
            setErrors(error.response.data)
        }
    };

    const completeForm = (e) => {
        const { name, value } = e.target;
        setDatos(prevDatos => ({
            ...prevDatos,
            [name]: value
        }));
    };

    return (
        <div className="container">
            <div className = "row justify-content-center" style={{ marginTop: '20%' }}>
                <form className='col-md-5' onSubmit={handleSubmit}>
                    {errors.error && <div>{errors.error}</div>}
                    <div className="form-group mt-3">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className={`form-control ${errors.Correo ? 'is-invalid' : ''}`} id="exampleInputEmail1" aria-describedby="emailHelp" name="Correo" placeholder="Enter email" value={Datos.Correo} onChange={completeForm}/>
                        {errors.Correo && <div className="invalid-feedback">{errors.Correo}</div>}
                    </div>
                    <div className="form-group mt-3">
                        <label for="exampleInputPassword1">Password</label>                       
                        <input type="password" className={`form-control ${errors.Contraseña ? 'is-invalid' : ''}`} id="exampleInputPassword1" placeholder="Password" name="Contraseña" value={Datos.Contraseña} onChange={completeForm}/>
                        {errors.Contraseña && <div className="invalid-feedback">{errors.Contraseña}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;