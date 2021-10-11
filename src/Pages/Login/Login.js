import React, { useState } from "react";
import {Form, Button} from "react-bootstrap";
import { useHistory } from "react-router";
import "./Login.css"

function Login(){

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const history = useHistory();

  //Para teste de validacao
  const rightEmail = "lampinho@cpejr.com.br"
  const rightSenha = "lampejavrau"

  function login(){
      if(email === rightEmail && senha === rightSenha){
        history.push("home");
        alert("Bem vindo! " + email);
      }
      else{
        alert("Senha e/ou Email incorretos");
      }
  }

  return (
    <div className="base"> 
      <div className="caixa">
        <div>
          <img className="logo" src="/images/Logo.png" alt="Life Jóias"/>

          <Form className="inputs">
            <Form.Group className="mb-3" controlId="email">
              <Form.Control type="email" placeholder="Email" 
                onChange={(e) => {setEmail(e.target.value)}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Control type="password" placeholder="Senha" 
                onChange={(e) => {setSenha(e.target.value)}}/>
            </Form.Group>

            <Button variant="primary" onClick={() => login()}>Login</Button>{' '}
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login;