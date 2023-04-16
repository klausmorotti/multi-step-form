import styled from "styled-components";

type ContainerProps = {
    selected: boolean;
}

export const Container = styled.div<ContainerProps>`
    padding:30px 20px;
    border:3px solid ${props => props.selected === true ? '#25CD8A' : '#CCC'};
    border-radius:20px;
    display:flex;
    align-items:center;
    cursor:pointer;
    transition:all ease .5s;

    &&:hover {
        border-color:#25CD8A;
    }
    &&:not(&&:last-child) {
        margin-bottom:30px;
    }

    .circle {
        width:60px;
        height:60px;
        border-radius:50%;
        background-color:#171A56;
        display:flex;
        justify-content:center;
        align-items:center;
        margin-right:15px;

        p {
            font-size:25px;
        }
    }
    .desc {

        h3 {
            color: #fff;
        }
        p {
            color:#CCC;
        }
    }
`;