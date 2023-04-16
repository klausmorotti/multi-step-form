import styled from "styled-components";

type ContainerProps = {
    selected: boolean;
}

export const Container = styled.div<ContainerProps>`
    padding:30px 20px;
    border:3px solid ${props => props.selected === true ? '#3936B9' : '#CCC'};
    border-radius:20px;
    display:flex;
    align-items:center;
    cursor:pointer;
    transition:all ease .5s;

    @media (max-width:500px) {
        padding:15px;
    }

    &&:hover {
        border-color:#3936B9;
    }
    &&:not(&&:last-child) {
        margin-bottom:30px;
    }

    .circle {
        width:60px;
        height:60px;
        border-radius:50%;
        background-color:#3936B9;
        display:flex;
        justify-content:center;
        align-items:center;
        margin-right:15px;

        @media (max-width:500px) {
            max-width:40px;
            max-height:40px;
        }

        p {
            font-size:25px;

            @media (max-width:500px) {
                font-size:18px;
            }
        }
    }
    .desc {

        h3 {
            color: #3936B9;

            @media (max-width:500px) {
                font-size:18px;
            }
        }
        p {
            color:#373737;

            @media (max-width:500px) {
                font-size:15px;
            }
        }
    }
`;