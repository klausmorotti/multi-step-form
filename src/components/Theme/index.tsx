import { ReactNode } from "react"
import { Container } from "./styles"
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

type ThemeProps = {
    children: ReactNode;
}

export const Theme = ( {children}: ThemeProps ) => {
    return (
        <Container>

            <div className="generalContent">

                <Header />

                <div className="container">

                    <Sidebar />

                    <div className="formArea">
                        {children}
                    </div>

                </div>
                
            </div>

        </Container>
    )
}