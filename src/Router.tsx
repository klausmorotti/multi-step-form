import { BrowserRouter, Routes,  Route } from 'react-router-dom';

// COMPONENTS
import { Step1 } from './pages/Step1';
import { Step2 } from './pages/Step2';
import { Step3 } from './pages/Step3';
import { SuccessPage } from './pages/SuccessPage';

// VALIDATION
import { RequireStep1 } from './contexts/RequireAuth';
import { RequireStep2 } from './contexts/RequireAuth';
import { RequireStep3 } from './contexts/RequireAuth';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Step1 /> } />
                <Route path="/step2" element={ <RequireStep1 children={ <Step2 /> } /> }/>
                <Route path="/step3" element={ <RequireStep2 children={ <Step3 /> } /> }/>
                <Route path="/success" element={ <RequireStep3 children={ <SuccessPage /> } /> }/>
            </Routes>
        </BrowserRouter>
    )
}