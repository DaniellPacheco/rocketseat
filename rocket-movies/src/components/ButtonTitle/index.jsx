import { Container } from './styles';

export function ButtonTitle({title, icon: Icon, ...rest}) {
    return (
        <Container 
            type="button"
            {...rest}
            to="/"
        >
            {Icon && <Icon size={20} />}
            {title}
        </Container>
    )
}