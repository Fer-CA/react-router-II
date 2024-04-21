import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 

const Pokemones = () => {
    const { pokemones } = useContext(MyContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/pokemones/${event.target.elements['listado-pokemones'].value}`);
    };

    return (
        <>
            <div className="notFound">
                <h1>Selecciona un pokémon</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Select aria-label="Default select example" name="listado-pokemones">
                        <option value="">Pokémon</option>
                        {pokemones.map((element, index) => (
                            <option key={index} value={element}>{element}</option>
                        ))}
                    </Form.Select>
                    <Button className="boton" type="submit" variant="warning">Buscar</Button> 
                </Form>
            </div>
        </>
    );
};

export default Pokemones;