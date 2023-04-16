import styled from "styled-components";

export const Container = styled.section`
    min-height:100vh;
    height:100%;
    background-color:#F4F5FC;

    .generalContent {
        max-width:1600px;
        width:100%;
        height:100%;
        margin:0 auto;
        padding:20px;

        .container {
            display:flex;
            min-height:700px;
            height:100%;

            @media (max-width:800px) {
                flex-direction:column;
            }

            .formArea {
                padding:50px 0 50px 50px;
                flex:1;

                @media (max-width:800px) {
                    padding:20px;
                }
            }
        }
    }
`;