// CONTEXT
import React, { Children, ReactNode } from "react";
import { useForm } from "./FormContext";

// HOOKS 
import { Navigate } from "react-router-dom";

type RequireAuthProps = {
    children:ReactNode;
}

export const RequireAuth = ({children}: RequireAuthProps) => {
    const { formState } = useForm();

    if( formState.step === 1 ) {
        if( formState.name === '' ) {
            return <Navigate to='' />
        } else {
            return children;
        }
    }
    if( formState.step === 2 ) {
        if( formState.level === 0 ) {
            return <Navigate to='/step2' />
        } else {
            return children;
        }
    }
    if( formState.step === 3 ) {
        if( formState.email === '' || formState.github === '' ) {
            return <Navigate to='/step3' />
        } else {
            return children;
        }
    }
}