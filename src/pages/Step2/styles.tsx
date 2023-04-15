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

    .options {
        margin-top:50px;

        .option {
            padding:30px 20px;
            border:2px solid #CCC;
            border-radius:20px;
            display:flex;
            align-items:center;
            cursor:pointer;
            transition:all ease .5s;

            .circle {
                width:60px;
                height:60px;
                border-radius:50%;
                background-color:#171A56;
                display:flex;
                justify-content:center;
                align-items:center;
                margin-right:15px;

                p {
                    font-size:25px;
                }
            }
            .desc {

                h3 {
                    color: #fff;
                }
                p {
                    color:#CCC;
                }
            }
        }
        .option:hover {
            border-color:#25CD8A;
        }
        .option:not(.option:last-child) {
            margin-bottom:30px;
        }
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
`;