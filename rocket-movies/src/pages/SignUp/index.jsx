import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

import { Container, Form, Background } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signUp } = useAuth();

    function handleSignUp() {
        signUp(email, password);
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input 
                    placeholder="E-mail" 
                    type="text" 
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    placeholder="Senha" 
                    type="password" 
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handleSignUp} />

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para login
                </Link>
            </Form>

            <Background />
        </Container>
    );
}