import { Container } from './styles';

export function Buttontext({ title, isActive = false, ...rest }) {
    return (
        <Container
            type="button"
            $isactive={isActive.toString()}
            {...rest}
        >
            {title}
        </Container>
    );
}