import { Container } from "./styles";

type ContainerProps = {
    title:string;
    description:string;
    icon:string;
    selected:boolean;
    onclick: () => void;
}

export const SelectOption = ({ title, description, icon, selected, onclick }: ContainerProps) => {
    return (
        <Container onClick={onclick} selected={selected}>
            <div className="circle">
                <p>{icon}</p>
            </div>

            <div className="desc">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Container>
    )
}