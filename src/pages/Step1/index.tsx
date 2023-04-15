import { Theme } from "../../components/Theme"
import { Container } from "./styles"

export const Step1 = () => {
    return (
        <Theme>
            <Container>

                    <div className="instructions">
                        <span>Passo 1/3</span>
                        <h2>Vamos começar com seu nome</h2>
                        <p>Preencha o campo abaixo com seu nome completo</p>
                    </div>

                    <form action="">
                        <label htmlFor="name">Seu nome completo</label>
                        <input id="name" name="name" type="text" />
                        <button>Avançar</button>
                    </form>

            </Container>
        </Theme>
    )
}