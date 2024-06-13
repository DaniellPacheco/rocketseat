import { Container, Add, AddButton, Movies } from "./styles"

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export function Home() {
    return (
        <Container>
            <Header />

            <Add>
                <h2>Meus filmes</h2>
                <AddButton>
                    <Button title="Adicionar filme" add />
                </AddButton>
            </Add>

            <Movies>

            </Movies>

        </Container>
    )
}