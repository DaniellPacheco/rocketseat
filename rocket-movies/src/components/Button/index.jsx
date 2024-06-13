import { FiPlus } from 'react-icons/fi';
import { Container } from './styles.js';

export function Button({title, add = false, ...rest}) {
    return (
        <Container {...rest}>
            { add ? <FiPlus /> : ''}
            {title}
        </Container>
    );
}