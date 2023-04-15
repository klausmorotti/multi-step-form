import styled from "styled-components";

export const Container = styled.article`
    .instructions {
        padding:30px 0;
        border-bottom:1px solid #CCC;

        span {
            font-size:20px;
            color:#CCC;
        }
        h2 {
            font-size:30px;
            color: #fff;
            margin:10px 0;
        }
        p {
            color: #ccc;
            font-size:18px;
        }
    }
    form {
        margin-top:50px;

        label {
            color:#FFF
        }
        input {
            width:100%;
            height:70px;
            padding:10px;
            display:flex;
            margin-top:10px;
            background-color:transparent;
            border:2px solid #25CD8A;
            border-radius:10px;
            outline:0;
            caret-color:#FFF;
            color: #fff;
            font-size:18px;
            font-family:'Poppins';
            margin-bottom:20px;
        }
        button {
            margin-left:30px;
            margin-top:30px;
            border-radius:20px;
            color: #fff;
            font-size:18px;
            font-family:'Poppins';
            cursor:pointer;
            background-color:transparent;
        }
        button:last-child {
            width:200px;
            background-color:#25CD8A;
            padding:15px;
            
        }
    }
`;