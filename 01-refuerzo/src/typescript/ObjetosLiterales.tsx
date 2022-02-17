import { json } from "stream/consumers";

interface Persona {
    nombreCompleto: string;
    edad: number;
    direction: Direccion
}

interface Direccion {
    pais: string;
    casaNo: number;
}


const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Fernando',
        edad: 35,
        direction: {
            pais: 'Canada',
            casaNo: 605
        }
    }


    return (
        <div>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </div>
    );
};

export default ObjetosLiterales;