import React from 'react';

//React memo hace una copia del componente para que no vuelva a cargarse por el cambio de estado de otro componente que lo esté llamando, solo que se vuelva a renderizar cuando cambien sus propios props
export const Small = React.memo(({ value }) => {

    console.log('Me volví a llamar');

    return (
        <small>{value}</small>
    )
})
