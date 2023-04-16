import { Theme } from "../../components/Theme";
import { Container } from "./styles";

// CONTEXT
import { FormActions, useForm } from "../../contexts/FormContext"
import { ChangeEvent, useEffect } from "react";

// HOOKS
import { useNavigate } from "react-router-dom";

export const Step3 = () => {
    const { formState, formDispatch } = useForm();
    const navigate = useNavigate();
    
    useEffect(() => {
        formDispatch({type:FormActions.setStep, payload:3});
    }, [])

    const changeEmail = (email: string) => {
        formDispatch({type:FormActions.setEmail, payload:email});
    }
    const changeGithub = (github:string) => {
        formDispatch({type:FormActions.setGithub, payload:github});
    }
    const lastStep = () => {
        navigate(-1);
    }
    const nextStep = () => {
        if( formState.email === '' ) {
            alert('Informe seu email');
        } else if ( formState.github === '' ) {
            alert('Informe seu Github');
        } else {
            navigate('/step3');
        }
    }

    return (
        <Theme>
            <Container>
                
                <div className="instructions">
                    <span>Passo 3/3</span>
                    <h2>Legal Klaus, Onde te achamos?</h2>
                    <p>Preencha com seus contatos para conseguirmos entrar em contato</p>
                </div>

                <form  onSubmit={ e => e.preventDefault() } action="">

                    <label htmlFor="email">Qual é seu email?</label>
                    <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formState.email}
                    onChange={ (e: ChangeEvent<HTMLInputElement>) => changeEmail(e.target.value) }
                    />

                    <label htmlFor="github">Qual é seu Github?</label>
                    <input 
                    id="github"
                    name="github" 
                    type="url" 
                    value={formState.github}
                    onChange={ (e: ChangeEvent<HTMLInputElement>) => changeGithub(e.target.value) }
                    />

                    <button onClick={lastStep}>Voltar</button>
                    <button onClick={nextStep}>Finalizar Cadastro</button>

                </form>

            </Container>
        </Theme>
    )
}