import styled from "styled-components";

export const Container = styled.main`
height:100vh;
`

export const Content = styled.div`
    display: grid;
    background-color:var(--gray);
    grid-template-rows: 641px;
    grid-template-columns: repeat(auto-fit, minmax( 1077px, 1fr));
    margin: 1rem;
    border-radius: 22px;
h1{ 
    font-size:32px;
    line-height:28px;
    text-align:center;
    letter-spacing: -0.165px;
    color: var(--title);
    padding:1rem;
}
`
;
