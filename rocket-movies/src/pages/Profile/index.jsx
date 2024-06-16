import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from "react-icons/fi";

import { Container, Form, Avatar } from "./styles";

import { ButtonTitle } from "../../components/ButtonTitle";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Profile() {
    return(
        <Container>
            <header>
                <ButtonTitle title="voltar" icon={FiArrowLeft} />
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/daniellpacheco.png" alt="Imagem de perfil" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input type="file" id="avatar" />
                    </label>
                </Avatar>

                <Input placeholder="Nome" type="text" icon={FiUser} />

                <Input placeholder="E-mail" type="text" icon={FiMail} />

                <Input placeholder="Senha atual" type="text" icon={FiLock} />

                <Input placeholder="Nova senha" type="text" icon={FiLock} />

                <Button title="Salvar" />

            </Form>
        </Container>
    )
}

