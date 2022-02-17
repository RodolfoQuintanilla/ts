import { useState } from 'react';

const useConter = (inicial: number) => {

    const [valor, setValor] = useState(0);

    const acumulador = (numero: number) => {
        setValor(valor + numero)
    }

    return {
        valor,
        acumulador
    };
};

export default useConter;