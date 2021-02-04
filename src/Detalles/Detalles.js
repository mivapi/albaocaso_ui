import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// export default function Detalles({ match }) {
const Detalles = ({match}) => {

    // let { id } = useParams();
console.log(match.id);
    return (
        <div>
        {/* <h3>Hola mundo ID: {id}</h3> */}
        hola mundo
        </div>
    );
}
export default Detalles;