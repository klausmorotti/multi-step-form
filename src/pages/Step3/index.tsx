import { Theme } from "../../components/Theme"
import { Container } from "./styles"

export const Step3 = () => {
    return (
        <Theme>
            <Container>
                
                <div className="instructions">
                    <span>Passo 3/3</span>
                    <h2>Legal Klaus, Onde te achamos?</h2>
                    <p>Preencha com seus contatos para conseguirmos entrar em contato</p>
                </div>

                <form action="">

                    <label htmlFor="email">Qual é seu email</label>
                    <input id="email" name="email" type="email" />

                    <label htmlFor="github">Qual é seu Github</label>
                    <input id="github" name="github" type="url" />

                    <button>Voltar</button>
                    <button>Finalizar Cadastro</button>

                </form>

            </Container>
        </Theme>
    )
}