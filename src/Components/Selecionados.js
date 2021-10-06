import React, {useState, useEffect} from "react";

function Selecionados({selecionados}){

    const [ingredientes, setIngredientes] = useState(selecionados);
    const [showWarning, setShowWarning] = useState(false);


    //O objetivo eh limitar a 3 ingredientes
    useEffect(() => {
        const newIngredientes = [];

        //Garantindo que so possa add elementos 3 vezes
        for(let i = 0; i < selecionados.length && i < 3; i++){
            const element = selecionados[i];
            newIngredientes.push(element);
        }

        setIngredientes(newIngredientes);

        setShowWarning(selecionados.length >= 3);

    }, [selecionados])
    //Passa como parametro O QUE o useEffect vai monitorar

    //Usa map para retornar os ingredientes como uma lista
    return(
        <div>
            <h3>Selecionados</h3>
            <ul>
                {ingredientes.map((ingrediente, index) => {
                    return(
                        <li key={index}>{ingrediente}</li>
                    )
                })}
            </ul>



            {/*Logica para exibir ou nao uma parte do codigo html*/}
            {showWarning && <h4>Número máximo de ingredientes atingido</h4>}
        </div>
    );
}

export default Selecionados;