 //Simulando un "proceso pesado" como un llamado a una Api por ejemplo
 
export const procesoPesado = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
        console.log('Ahí vamos');
    }

    return `${iteraciones} iteraciones realizadas`;
}
