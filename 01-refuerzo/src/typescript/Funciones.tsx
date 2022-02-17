import React from 'react';

const Funciones = () => {

    const sumar = (a: number, b: number): number => {
        return a + b
    }


    return (
        <>
            <h3>Funciones</h3>
            {sumar(5, 7)}
        </>
    );
};

export default Funciones;