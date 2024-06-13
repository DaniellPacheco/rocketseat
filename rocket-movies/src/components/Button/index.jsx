import { Container } from './styles.js';

export function Button({title, ...rest}) {
    return (
        <Container {...rest}>
            {title}
        </Container>
    );
}