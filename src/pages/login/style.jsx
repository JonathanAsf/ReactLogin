import styled from "styled-components";
export const Container = styled.div`
width: 100%;
height: 100vh;
background-color: purple;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items:center;
`
export const Column = styled.div`
width: 50%;
height: 100vh;
&:last-child{
    display:flex;
    justify-content: flex-end;
    background-color: #DDE1E6;
}
`


export const Imagem = styled.img`
width: auto;
height: 100vh;
`

