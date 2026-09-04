import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Form, Input, Btn, ToggleText, Message } from "./style";
import { registerUser, loginUser } from "../../utils/auth";

function Login() {
    const [isRegistering, setIsRegistering] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username.trim() === "" || password.trim() === "") {
            setMessage("Preencha usuário e senha.");
            setIsError(true);
            return;
        }

        if (isRegistering) {
            const result = registerUser(username, password);
            setMessage(result.message);
            setIsError(!result.success);

            if (result.success) {
                setIsRegistering(false);
                setUsername("");
                setPassword("");
            }
        } else {
            const result = loginUser(username, password);
            setMessage(result.message);
            setIsError(!result.success);

            if (result.success) {
                navigate("/");
            }
        }
    };

    return (
        <Container>
            <h1>{isRegistering ? "Criar Conta" : "Entrar"}</h1>

            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Btn type="submit">
                    {isRegistering ? "Cadastrar" : "Entrar"}
                </Btn>

                {message && <Message error={isError}>{message}</Message>}
            </Form>

            <ToggleText
                onClick={() => {
                    setIsRegistering(!isRegistering);
                    setMessage("");
                }}
            >
                {isRegistering
                    ? "Já tem conta? Entrar"
                    : "Não tem conta? Cadastre-se"}
            </ToggleText>

            <Link to="/">
                <ToggleText>Voltar para Home</ToggleText>
            </Link>
        </Container>
    );
}

export default Login;