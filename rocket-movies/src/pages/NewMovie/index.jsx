import { FiArrowLeft } from "react-icons/fi";

import { Container, Form, Marcadores, Actions } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonTitle } from "../../components/ButtonTitle";
import { MainTitle } from "../../components/MainTitle";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Highligther } from "../../components/Highligther";

export function NewMovie() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <ButtonTitle title="voltar" icon={FiArrowLeft} />
                        <MainTitle>Novo filme</MainTitle>
                    </header>

                    <div>
                        <Input placeholder="Title" />
                        <Input placeholder="Sua nota de (0 a 5)" />
                    </div>

                    <Textarea placeholder="Observações" />

                    <Marcadores>
                        <h3>Marcadores</h3>
                        <div>
                            <Highligther value="react" />
                            <Highligther isNew placeholder="Novo" />
                        </div>
                    </Marcadores>

                    <Actions>
                        <Button title="Excluir filme" deleteBtn />
                        <Button title="Salvar alterações" />
                    </Actions>
                </Form>
            </main>
        </Container>
    )
}