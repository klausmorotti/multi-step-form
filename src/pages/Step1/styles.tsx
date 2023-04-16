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
        }
        button {
            width:200px;
            margin-top:30px;
            padding:15px;
            border-radius:20px;
            background-color:#3936B9;
            color: #fff;
            font-size:18px;
            font-family:'Poppins';
            cursor:pointer;
            transition:all ease .5s;

            @media (max-width:500px) {
                width:100%;
            }
        }
        button:hover {
            box-shadow:0 8px 30px #3936B9;
        }
    }
`;