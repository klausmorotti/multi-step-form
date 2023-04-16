// CONTEXT
import { ReactNode } from "react";
import { useFormContext } from "./FormContext";

// HOOKS 
import { Navigate } from "react-router-dom";

type RequireAuthProps = {
    children:JSX.Element;
}

export const RequireStep1 = ({children}: RequireAuthProps) => {
    const { formState } = useFormContext();

    if ( formState.name === '' ) {
        return <Navigate to="/" />
    } else {
        return children;
    }
}

export const RequireStep2 = ({children}: RequireAuthProps) => {
    const { formState } = useFormContext();

    if ( formState.level === 0 ) {
        return <Navigate to="/step2" />
    } else {
        return children;
    }
}

export const RequireStep3 = ({children}: RequireAuthProps) => {
    const { formState } = useFormContext();

    if ( formState.email === '' || formState.github === '' ) {
        return <Navigate to="/step3" />
    } else {
        return children;
    }
}