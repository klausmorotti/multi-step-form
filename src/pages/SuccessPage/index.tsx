import { Container } from "./styles"

// IMAGES AND ICONS
import CheckedIcon from '../../assets/checked.png';

export const SuccessPage = () => {

    const goToInit = () => {
        location.reload();
    }

    return (
        <Container>
            
            <div className="modal">
                <img src={CheckedIcon} alt="Ícone Sucesso" />
                <h2>Parabéns</h2>
                <p>Você finalizou seu cadastro com sucesso!</p>

                <div className="messageArea">
                    <h3>O que vem agora?</h3>
                    <p>Fique de olho no seu email pois a qualquer momento entraremos em contato. Enquanto isso, aproveite para se aprimorar para no momento do teste você impressionar nossos recrutadores. 🤩</p>
                    <button onClick={goToInit}>Voltar ao início</button>
                </div>
            </div>

        </Container>
    )
}