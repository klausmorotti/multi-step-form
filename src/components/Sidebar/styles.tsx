import styled from "styled-components";

export const Container = styled.aside`
    width:30%;
    height:100%;
    padding:40px 0;
    display:flex;
    justify-content:flex-end;
    border-right:1px solid #CCC;

    .steps {
        width:70%;
        margin-right:-8px;
        height:100%;

        .step {
            width:100%;
            display:flex;
            justify-content:space-between;
            align-items:center;

            .info {
                width:120px;

                h3 {
                    color:#FFF;
                    margin-bottom:5px;
                    cursor:pointer;
                }
                p {
                    color:#CCC;
                    cursor:pointer;
                }
            }
            
            .circle {
                width:60px;
                height:60px;
                background-color:#49497B;
                border-radius:50%;
                display:flex;
                justify-content:center;
                align-items:center;
                cursor:pointer;

                img {
                    width:30px;
                    height:25px;
                    color:white;
                }
            }
            .ballStep {
                width:15px;
                height:15px;
                border:3px solid #CCC;
                border-radius:50%;
                cursor:pointer;
                background-color:#02044A;
            }

        }
        .step:not(.step:last-child) {
            margin-bottom:50px;
        }
    }
`;