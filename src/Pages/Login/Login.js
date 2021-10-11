import React from "react";
import {Form, Button} from "react-bootstrap";
import "./Login.css"

function Login(){

    return (
        <div className="base">
            <div className="caixa">
                <div>
                    <img className="logo" src="/images/Logo.png" alt="Life Jóias"/>

                    <Form className="inputs">
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>
                        <Button variant="primary">Login</Button>{' '}
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login;