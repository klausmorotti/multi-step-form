import { BrowserRouter, Routes,  Route } from 'react-router-dom';

// COMPONENTS
import { Step1 } from './pages/Step1';
import { Step2 } from './pages/Step2';
import { Step3 } from './pages/Step3';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Step1 /> }/>
                <Route path="/step2" element={ <Step2 /> }/>
                <Route path="/step3" element={ <Step3 /> }/>
            </Routes>
        </BrowserRouter>
    )
}