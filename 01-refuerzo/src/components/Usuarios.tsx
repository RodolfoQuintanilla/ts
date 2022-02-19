import { useEffect } from 'react';
import { reqResApi } from '../api/reqRes';



const Usuarios = () => {

    useEffect(() => {
        //Lamado al API
        reqResApi.get('/users').then(res => {
            console.log(res.data.data);

        }).catch(err => {
            console.log(err);

        })
    }, []);

    return (
        <div>
            <h1>Usuarios:</h1>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>

        </div>
    );
};

export default Usuarios;