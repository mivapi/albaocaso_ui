import React from 'react';

const Ejemplo = ({match}) => {
    return(
        <div>
            Hola mundo: {match.params.id_param}
        </div>
    );
}
export default Ejemplo;