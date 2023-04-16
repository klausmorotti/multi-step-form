import styled from "styled-components";

export const Container = styled.section`
    height:100vh;
    background-color:#F4F5FC;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px;

    .modal {
        max-width:500px;
        width:100%;
        min-height:500px;
        display:flex;
        flex-direction:column;
        align-items:center;
        background-color:#FFF;
        border-radius:20px;
        padding:40px;

        img {
            width:40px;
            height:40px;
        }
        h2 {
            margin:10px 0;
            color:#3936B9;
            text-align:center;
        }
        p {
            color:#BBB;
            text-align:center;
        }
        .messageArea {
            margin-top:30px;
            background-color:#F4F5FC;
            border-radius:20px;
            padding:20px;

            h3 {
                margin-bottom:15px;
                color:#3936B9;
            }
            p {
                line-height:30px;
                color:#BBB;
                margin-bottom:20px;
            }
            button {
                width:100%;
                height:60px;
                background-color:transparent;
                border:2px solid #3936B9;
                color:#3936B9;
                border-radius:10px;
                font-size:18px;
                font-weight:400;
                cursor:pointer;
                transition:all ease .5s;
            }
            button:hover {
                background-color:#3936B9;
                color:#FFF;
                box-shadow:0 8px 30px #3936B9;
            }
        }
    }
`;