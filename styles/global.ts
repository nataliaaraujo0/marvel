import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}

:root{
--black:#0000;
--gray:#232323;
--title-hover:#EEEEEE;
--red:#E61C23;
--title:#F34848;

--shape-img:#4A0709;
--shape-hover:linear-gradient(180deg, #FA4949 0%, rgba(35, 35, 35, 0) 100%);
--shape-card:radial-gradient(
    142.29% 142.29% at -5.85% -42.29%,
    #232323 0%,
    rgba(35, 35, 35, 0) 100%
  );

}

html{
    @media(max-width: 1080px) {
        font-size: 93.75%; //15px
    }
    @media(max-width: 720px) {
        font-size: 87.5%; //14px
    }
}

body{
  font-family: 'Roboto', sans-serif;
 
 
  background: linear-gradient(295.8deg, #101010 85.23%, #101010 88.52%, #ED1D24 99.31%, rgba(16, 16, 16, 0.138321) 100.74%);
}
`;
