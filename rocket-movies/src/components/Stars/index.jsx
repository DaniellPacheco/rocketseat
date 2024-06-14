import { IoMdStar, IoMdStarHalf  } from "react-icons/io"

import { Container } from "./styles";

export function Stars() {
    return (
        <Container>
            <IoMdStar/>
            <IoMdStar/>
            <IoMdStar/>
            <IoMdStar/>
            <IoMdStarHalf/>
        </Container>
    )
}