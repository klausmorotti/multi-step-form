import styled from "styled-components";

export const Container = styled.article`
    .instructions {
        padding:30px 0;
        border-bottom:1px solid #3936B9;

        span {
            font-size:20px;
            color:#373737;
        }
        h2 {
            font-size:30px;
            color: #3936B9;
            margin:10px 0;
        }
        p {
            color: #373737;
            font-size:18px;
        }
    }
    form {
        margin-top:50px;

        label {
            color:#373737
        }
        input {
            width:100%;
            height:70px;
            padding:10px;
            display:flex;
            margin-top:10px;
            background-color:transparent;
            border:2px solid #3936B9;
            border-radius:10px;
            outline:0;
            caret-color:#373737;
            color: #373737;
            font-size:18px;
            font-family:'Poppins';
            margin-bottom:20px;

            @media (max-width:500px) {
                font-size:15px;
            }
        }
        .buttons {
            display:flex;

            @media (max-width:500px) {
                margin-top:50px;
                flex-direction:column-reverse;
            }

            button {

                @media (max-width:500px) {
                    max-width:100%;
                    margin:0;
                }

                color:#373737;
                margin-left:30px;
                margin-top:30px;
                border-radius:20px;
                font-size:18px;
                font-family:'Poppins';
                cursor:pointer;
                background-color:transparent;
                transition:all ease .5s;
            }
            button:last-child {
                width:200px;
                background-color:#3936B9;
                padding:15px;
                color:#FFF;

                @media (max-width:500px) {
                    margin-bottom:20px;
                    width:100%;
                }
            }
            button:last-child:hover {
                box-shadow:0 8px 30px #3936B9;
            }
        }
    }
`;