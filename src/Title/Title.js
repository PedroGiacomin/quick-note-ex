import React from "react";

//Outra maneira de passar o props
function Title({title, children}){
    return(
        <div>
            <h1>{title}</h1>
            {children}
        </div>
    );
}

export default Title