import { Container } from "./styles";

// IMAGES AND ICONS
import  ProfileIcon from '../../assets/profile.svg';
import  BookIcon  from '../../assets/book.svg';
import  MailIcon from '../../assets/mail.svg';

// CONTEXT
import { useFormContext } from "../../contexts/FormContext";

// HOOKS
import { Link } from "react-router-dom";


export const Sidebar = () => {
    const { formState } = useFormContext();
    
    return (
        <Container step={formState.step}>
            
            <div className="steps">

                <Link className="step" to="/">
                    <div className="info">
                        <h3>Pessoal</h3>
                        <p>Se indentifique</p>
                    </div>
                    <div className="circle">
                        <img src={ProfileIcon} alt="Ícone Usuário" />
                    </div>
                    <div className="ballStep"></div>
                </Link>

                <Link className="step" to="/step2">
                    <div className="info">
                        <h3>Profissional</h3>
                        <p>Seu nivel</p>
                    </div>
                    <div className="circle">
                        <img src={BookIcon} alt="Ícone Livro" />
                    </div>
                    <div className="ballStep"></div>
                </Link>

                <Link className="step" to="/step3">
                    <div className="info">
                        <h3>Contatos</h3>
                        <p>Como te achar</p>
                    </div>
                    <div className="circle">
                        <img src={MailIcon} alt="Ícone Email" />
                    </div>
                    <div className="ballStep"></div>
                </Link>

            </div>

        </Container>
    )
}