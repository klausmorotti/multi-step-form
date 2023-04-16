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

    .options {
        margin-top:50px;
    }

    .buttons {
        display:flex;

        @media (max-width:500px) {
            flex-direction:column-reverse;
        }

        button {
            margin-left:30px;
            margin-top:30px;
            border-radius:20px;
            color: #373737;
            font-size:18px;
            font-family:'Poppins';
            cursor:pointer;
            background-color:transparent;
            transition: all ease .5s;
            text-align:center;

            @media (max-width:500px) {
                margin:0;
            }
        }
        button:last-child {
            width:200px;
            background-color:#3936B9;
            padding:15px;
            color:#FFF;

            @media (max-width:500px) {
                width:100%;
                margin-bottom:20px;
            }
        }
        button:last-child:hover {
            box-shadow:0 8px 30px #3936B9;
        }
    }
`;