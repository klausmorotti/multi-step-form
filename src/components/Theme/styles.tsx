import styled from "styled-components";

export const Container = styled.section`
    height:100vh;
    background-color:#02044A;

    .generalContent {
        max-width:1600px;
        width:100%;
        height:100%;
        margin:0 auto;
        padding:20px;

        .container {
            display:flex;
            height:700px;

            .formArea {
                padding:50px 0 50px 50px;
                flex:1;
            }
        }
    }
`;