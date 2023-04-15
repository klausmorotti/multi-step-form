import { Router } from "./Router";
import { FormProvider } from "./contexts/FormContext";

const App = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
 
  )
}

export default App;
