import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';
import '../02-useEffect/effects.css';

export const MemoHook = () => {
    const { counter, increment } = useCounter(1000);
    const [show, setShow] = useState(true);


    //useMemo memoriza la función procesoPesado. Esto hará que la función solo se ejecute cuando sea necesario. El useMemo Hook acepta un segundo parámetro para declarar dependencias. La función costosa (procesoPesado) solo se ejecutará cuando sus dependencias hayan cambiado (en este caso "counter").
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />
            <p>{memoProcesoPesado}</p>
            <button
                className='btn btn-primary'
                onClick={increment}
            >
                +1
            </button>
            <button
                className='btn btn-outline-primary ml-3'
                onClick={() => {
                    setShow(!show)
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
