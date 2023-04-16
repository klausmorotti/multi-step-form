import { Container } from "./styles";
import { Theme } from "../../components/Theme";

// CONTEXT
import { FormActions, useForm } from "../../contexts/FormContext";

// HOOKS
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// COMPONENTS
import { SelectOption } from "../../components/SelectOption";


export const Step2 = () => {
    const { formState, formDispatch } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        formDispatch({type:FormActions.setStep, payload:2});
    }, []);

    const changeLevel = (level:number) => {
        formDispatch({type:FormActions.setLevel, payload:level});
    }
    const lastStep = () => {
        navigate(-1);
    }
    const nextStep = () => {
        if( formState.level === 0 ) {
            alert('Selecione seu nível');
        } else {
            navigate('/step3');
        }
    }

    return (
        <Theme>
            <Container>
                
                <div className="instructions">
                    <span>Passo 2/3</span>
                    <h2>{formState.name}, o que melhor descreve você?</h2>
                    <p>Escolha a opção que melhor condiz com seu estado aqui, profissionalmente</p>
                </div>

                <div className="options">

                    <SelectOption 
                        title="Sou Iniciante"
                        description="Comecei a programar há menos de 2 anos"
                        icon="🥳"
                        selected={formState.level === 1}
                        onclick={() => changeLevel(1)}
                    />

                    <SelectOption 
                        title="Sou Programador"
                        description="Já programo há 2 anos ou mais"
                        icon="😎"
                        selected={formState.level === 2}
                        onclick={() => changeLevel(2)}
                    />

                    <button onClick={lastStep}>Voltar</button>
                    <button onClick={nextStep}>Avançar</button>

                </div>

            </Container>
        </Theme>
    )
}