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

        if(selecionados.length >= 3){
            setShowWarning(true);
        }

        else{
            setShowWarning(false);
        }

    }, [selecionados])
    //Passa como parametro O QUE o useEffect vai monitorar

    return(
        <div>
            <h3>Selecionados</h3>
            <p>{ingredientes.join(" ")}</p>
            {/*Logica para exibir ou nao uma parte do codigo html*/}
            {showWarning && <h4>Número máximo de ingredientes atingido</h4>}
        </div>
    );
}

export default Selecionados;