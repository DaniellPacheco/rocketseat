import { Input } from "../Input";
import { Container, Search, Profile } from "./styles";

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>

            <Search>
                <Input placeholder="Pesquisar pelo título" />
            </Search>

            <Profile to="/profile">
                <div>
                    <strong>Daniel Pacheco</strong>
                    <a href="#">
                        sair
                    </a>
                </div>

                <img src="https://github.com/daniellpacheco.png" alt="Imagem de perfil" />
            </Profile>

        </Container>
    )
}