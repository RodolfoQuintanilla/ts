import useConter from '../hooks/useConter';


const ContadorConHook = () => {

    const { valor, acumulador } = useConter(10);

    return (
        <div>
            <h1>Contador con Hook: {valor}</h1>
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

export default ContadorConHook;