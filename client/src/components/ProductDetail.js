import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';

const ProductDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    
    const item = location.state['item'];
    
    const [Stock, setStock] = useState(null)

    const [Select, setSelect] = useState(null)
    const [Cantidad, setCantidad] = useState(0);

    const [Error, setError] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:5000/GetStock',{
            params: {ProductosId: item["id"]}
        })
        .then(response => {
            setStock(response.data)
            setSelect(response.data[0])
        })
        .catch(error => {
            setError(error.response.data.error)
            console.log(error)
        });
    }, [])

    const handleSizeChange = (e) => {
        const selectedItemId = e.target.value;
        const selectedItem = Stock.find(item => item.id === parseInt(selectedItemId)); 
        setSelect(selectedItem);
        setCantidad(0);
    };

    const handleQuantityChange = (e) => {
        setCantidad(e.target.value)
    }

    /*const AddToCart = async () => {
        setErrors();

        try {
            const response = await axios.post('http://localhost:5000/AddCart', Datos);
            console.log("Respuesta del servidor:", response);

            if(Datos.Correo.match(/(?<=@)[\w.-]+/)[0] === "neon.com"){
                setLoadingMessage("Comprobando la existencia de la dirección de correo en las bases de datos...")
            }

            const timeoutId = setTimeout(() => {
                navigate(`/Login`);
            }, 3000);

            return () => clearTimeout(timeoutId);
            
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            if (error.response) {
                setErrors(error.response.data);
            } 
            setLoading(false)
        }
    };*/

    return (
        <div className="container py-5">
            <ErrorMessage message={Error}/>
            <div className='row'>
                <div className='row g-4 col-md-4'>
                    <img src={`data:image/jpeg;base64,${item["Imagen"]}`} className="rounded img-fluid mx-auto" alt="Product 1"/>
                </div>
                <div className='row g-4 col-md-6 ms-auto py-5 h-75'>
                    <p className="fs-2 fw-bold">{item["Nombre"]}</p>

                    <div className = "mt-auto">
                        <p className="fs-5 mt-1">Precio: {item["Precio"]}$</p>
                        <p className="fs-5 mt-1">Stock: {Select ? Select["Stock"] : 0}</p>

                        <label className="fs-5 mt-1">Seleccionar talla</label>
                        <select className="form-control fs-5 mb-1" value={Select ? Select.id : ''} onChange={handleSizeChange} style={{ width: '200px', textAlign: 'center' }}>
                            {Stock ? Stock.map((item) => (
                                item.Stock > 0 && (
                                    <option key={item.id} value={item.id}>
                                        {item.Tamaño}
                                    </option>
                                )
                            )): null}
                        </select>
                    </div>


                    <div className="d-flex flex-column align-items-start mt-3">
                        <label className="fs-5">Cantidad</label>
                        <input
                            type="number"
                            value={Cantidad}
                            onChange={handleQuantityChange}
                            min="1"
                            max={Select ? Select["Stock"] : 0}
                            style={{ width: '200px', textAlign: 'center' }}
                            className="form-control fs-5 mb-1" // Added margin-bottom to space out from button
                        />
                        <button className="btn btn-primary fs-5" style={{ width: '200px', textAlign: 'center' }}>Agregar al carrito</button>
                    </div>

                </div>
            </div>

            <div className='row'>
                <div className='row g-4 col-md-12'>
                    <p>{item["Descripcion"]}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;