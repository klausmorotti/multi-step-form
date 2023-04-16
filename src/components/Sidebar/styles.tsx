import styled from "styled-components";

type ContainerProps = {
    step:number;
}

export const Container = styled.aside<ContainerProps>`
    width:30%;
    min-height:700px;
    height:100%;
    padding:40px 0;
    display:flex;
    justify-content:flex-end;
    border-right:1px solid #3936B9;

    @media (max-width:800px) {
        width:100%;
        min-height: auto;
        border-right:0;
    }
    @media (max-width:500px) {
        display:none;
    }

    .steps {
        max-width:300px;
        width:100%;
        margin-right:-8px;
        height:100%;

        @media (max-width:800px) {
            max-width:100%;
            display:flex;
            align-items:center;
        }

        .step {
            width:100%;
            display:flex;
            justify-content:space-between;
            align-items:center;
            text-decoration:none;

            @media (max-width:800px) {
                flex-direction:column;
                align-items:center;
            }

            .info {
                width:120px;
                
                @media(max-width:800px) {
                    margin-top:10px;
                    text-align:center;
                }
                

                h3 {
                    color:#3936B9;
                    margin-bottom:5px;
                    cursor:pointer;
                }
                p {
                    color:#373737;
                    cursor:pointer;
                }
            }
            
            .circle {
                width:60px;
                height:60px;
                background-color:#484981;
                border-radius:50%;
                display:flex;
                justify-content:center;
                align-items:center;
                cursor:pointer;

                @media (max-width:800px) {
                    order:-1;
                }

                img {
                    width:30px;
                    height:25px;
                    color:white;
                }
            }
            .ballStep {
                width:15px;
                height:15px;
                border:3px solid #3936B9;
                border-radius:50%;
                cursor:pointer;
                background-color:#F4F5FC;

                @media (max-width:800px) {
                    display:none;
                }
            }

        }
        .step:nth-child(${props => props.step}) {

            .circle {
                background-color:#3936B9;
            }
            .ballStep {
                background-color:#3936B9;
            }
        }
        .step:not(.step:last-child) {
            margin-bottom:50px;

            @media (max-width:800px) {
                margin:0;
            }
        }
    }
`;