import React, { createContext, useReducer, ReactNode, useContext } from "react";

const FormContext = createContext<ContextType | undefined>(undefined);

// CONTEXT TYPE 
type ContextType = {
    formState: initialDataType;
    formDispatch: (action: reducerActions) => void;
}

// TYPE DATA INITIALS
export type initialDataType = {
    step:number;
    name:string;
    level:number;
    email:string;
    github:string;
}

// DATA INITIALS 
const initialData: initialDataType = {
    step:1,
    name:'',
    level:0,
    email:'',
    github:''
}

// TYPE REDUCER ACTIONS
type reducerActions = {
    type: FormActions;
    payload: any;
}

// TYPE PROVIDER PROPS 
type FormProviderProps = {
    children:ReactNode;
}

export enum FormActions {
    setStep,
    setName, 
    setLevel,
    setEmail,
    setGithub
}

// REDUCER FUNCTIONS
const FormReducer = (formState: initialDataType, actionsState: reducerActions) => {
    switch(actionsState.type) {
        case FormActions.setStep:
            return { ...formState, step: actionsState.payload };
        case FormActions.setName:
            return { ...formState, name: actionsState.payload };
        case FormActions.setLevel:
            return { ...formState, level: actionsState.payload };
        case FormActions.setEmail:
            return { ...formState, email: actionsState.payload };
        case FormActions.setGithub:
            return { ...formState, github: actionsState.payload };
        default:
            return formState;
    }
}

// FORM PROVIDER
export const FormProvider = ({children}: FormProviderProps) => {
    const [formState, formDispatch] = useReducer(FormReducer, initialData);
    const value = { formState, formDispatch }

    return (
        <FormContext.Provider value={ value }>
            {children}
        </FormContext.Provider>
    )
}

// CONTEXT HOOK 
export const useFormContext = () => {
    const context = useContext(FormContext);
    if ( context === undefined ) {
        throw new Error('O useForm precisa estar dentro do form provider');
    }
    return context;
}