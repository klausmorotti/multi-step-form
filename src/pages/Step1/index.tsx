import { Container } from "./styles";

// COMPONENTS
import { Theme } from "../../components/Theme";

// CONTEXT
import { FormActions, useForm } from "../../contexts/FormContext";

// HOOKS
import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Step1 = () => {
    const { formState, formDispatch } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        formDispatch({type:FormActions.setStep, payload:1});
    }, []);

    const changeName = (name:string) => {
        formDispatch({type: FormActions.setName, payload:name});
    }
    const nextStep = () => {
        if( formState.name === '' ) {
            alert('Preencha seu nome');
        } else {
            navigate('/step2');
        }
    }

    return (
        <Theme>
            <Container>

                    <div className="instructions">
                        <span>Passo 1/3</span>
                        <h2>Vamos começar com seu nome</h2>
                        <p>Preencha o campo abaixo com seu nome completo</p>
                    </div>

                    <form onSubmit={ e => e.preventDefault() } action="">
                        <label htmlFor="name">Seu nome completo</label>
                        
                        <input 
                        id="name" 
                        name="name" 
                        type="text" value={formState.name} 
                        onChange={ (e: ChangeEvent<HTMLInputElement>) => changeName(e.target.value)}
                        />
                        <button onClick={nextStep}>Avançar</button>
                    </form>

            </Container>
        </Theme>
    )
}