import { Container } from './styles';

export function Buttontext({ title, ...rest }) {
    return (
        <Container
            {...rest}
        >
            {title}
        </Container>
    );
}