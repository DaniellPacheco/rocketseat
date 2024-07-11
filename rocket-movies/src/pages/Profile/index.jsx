import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from "react-icons/fi";

import { Container, Form, Avatar } from "./styles";

import { ButtonTitle } from "../../components/ButtonTitle";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState("");
    const [passwordNew, setPasswordNew] = useState("");

    const [avatar, setAvatar] = useState("");
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        await updateProfile({user, avatarFile });
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagemPreview = URL.createObjectURL(file);
        setAvatar(imagemPreview);
    }

    function handleBack() {
        navigate(-1); //o -1 faz com ele volte para a página anterior, a que o abriu
    }


    return(
        <Container>
            <header>
                <ButtonTitle title="voltar" icon={FiArrowLeft} onClick={handleBack} />
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/daniellpacheco.png" alt="Imagem de perfil" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input type="file" id="avatar" onChange={handleChangeAvatar} />
                    </label>
                </Avatar>

                <Input 
                    placeholder="Nome" 
                    type="text" 
                    icon={FiUser} 
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    placeholder="E-mail" 
                    type="text" 
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)} 
                />

                <Input 
                    placeholder="Senha atual" 
                    type="text" 
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)} 
                />

                <Input 
                    placeholder="Nova senha" 
                    type="text" 
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)} 
                />

                <Button title="Salvar" onClick={handleUpdate} />

            </Form>
        </Container>
    )
}

