import { FiPlus } from 'react-icons/fi';
import { Container } from './styles.js';

export function Button({title, add = false, deleteBtn = false, ...rest}) {
    return (
        <Container {...rest} deleteBtn={deleteBtn} to="/new">
            { add ? <FiPlus /> : ''}
            {title}
        </Container>
    );
}