import { Theme } from "../../components/Theme"
import { Container } from "./styles"

export const Step2 = () => {
    return (
        <Theme>
            <Container>
                
                <div className="instructions">
                    <span>Passo 2/3</span>
                    <h2>Klaus, o que melhor descreve você?</h2>
                    <p>Escolha a opção que melhor condiz com seu estado aqui, profissionalmente</p>
                </div>

                <div className="options">

                    <div className="option">
                        <div className="circle">
                            <p>🥳</p>
                        </div>

                        <div className="desc">
                            <h3>Sou iniciante</h3>
                            <p>Comecei a programar há menos de 2 anos</p>
                        </div>
                    </div>

                    <div className="option">
                        <div className="circle">
                        <p>😎</p>
                        </div>

                        <div className="desc">
                            <h3>Sou Programador</h3>
                            <p>Já programo há 2 anos ou mais</p>
                        </div>
                    </div>

                    <button>Voltar</button>
                    <button>Avançar</button>

                </div>

            </Container>
        </Theme>
    )
}