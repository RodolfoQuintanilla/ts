

const TiposBasicos = () => {

    let nombre: String = 'Rodolfo';
    const edad = 35;
    const estaActivo: boolean = false;


    const poderes: number[] = []; //'velocidad', 'Volar', 'Respirar en el Agua'


    return (
        <div>
            <h4>Tipos Basicos</h4>
            {nombre}
            <br />
            {poderes.join(', ')}
        </div>
    );
};

export default TiposBasicos;