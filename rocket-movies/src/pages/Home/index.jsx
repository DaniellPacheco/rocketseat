import { Container, Add, AddButton, Movies } from "./styles"

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Movie } from "../../components/Movie";
import { MainTitle } from "../../components/MainTitle";

export function Home() {
    return (
        <Container>
            <Header />

            <Add>
                <MainTitle>Meus filmes</MainTitle>
                <AddButton>
                    <Button title="Adicionar filme" add />
                </AddButton>
            </Add>

            <Movies>

                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />

            </Movies>

        </Container>
    )
}