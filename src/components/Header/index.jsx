import { Container, Profile } from './styled';

export function Header() {
    return (
        <Container>
            <Profile>
                <img 
                    src="https://github.com/antoniolsteixeira.png" 
                    alt="Foto do usuário" 
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Rodrigo Gonçalves</strong>
                </div>
            </Profile>
        </Container>
    );
}