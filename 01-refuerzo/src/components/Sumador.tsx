import { useState } from 'react';

const Sumador = () => {
    const [valor, setValor] = useState(0);

    const acumulador = (numero: number) => {
        setValor(valor + numero)
    }

    return (
        <div>
            <h1>Contador: {valor}</h1>
            <button
                className='btn btn-primary'
                onClick={() => acumulador(1)}
            >+1
            </button>
            &nbsp;
            <button
                className='btn btn-primary'
                onClick={() => acumulador(-1)}
            >-1
            </button>
        </div>
    );
};

export default Sumador;