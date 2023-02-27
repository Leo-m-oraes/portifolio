import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    margin-top:5rem;

    > img{
        width: 40rem;
        flex: 1;
    }
    
    > div{
        flex: 4;
    }
    @media(max-width:1450px) {
        > img{
            width: 30rem;
        }
        > div{
            flex: 1;
        }
    }
    @media(max-width:1000px) {
        > img{
            width: 22rem;
        }
        
    }
    @media(max-width:700px) {
        flex-direction: column-reverse;
        > div{
            width: 100%;
        }
        
    }
`;

export const TextContainer = styled.section`
    margin-bottom: 2rem;
    width: 100%;

    > h1{
        font-size: 8rem;
       
        background-size: 500% 500%;
        background-image:  ${({theme}) => theme.textGradient};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: animateGradient 25s linear infinite forwards;
        
}

        @keyframes animateGradient {
        0% {
         background-position-x: 0% ;
        }
        
        100% {
        background-position-x: 600vw;
  }

       
    }
    > h2{
        background-size: 500% 500%;
        background-image:  ${({theme}) => theme.textGradient};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: animateGradient2 25s linear infinite forwards;
        
}

        @keyframes animateGradient2 {
        0% {
         background-position-x: -50% ;
        }
        
        100% {
        background-position-x: -600vw;
  }
    }
    @media(max-width:1450px) {
        > h1{
            font-size: 5rem;
        }
        > h2{
            font-size: 2rem;
        }
    }
    @media(max-width:1000px) {
        > h1{
            font-size: 3rem;
        }
        > h2{
            font-size: 1.5rem;
        }
    }
    @media(max-width:700px) {
        > h1{
            text-align:center;
        }
        > h2{
            text-align:center;
        }
    }
`;

export const InfosContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

`;
export const CodeItem = styled.pre`
    background: ${({theme}) => theme.gradient};
    padding: 2rem;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 300;
    color: #ffffff;
    width: 24rem;
    align-self: flex-start;
    transition: 1s;

    &:hover{
        filter: brightness(1.2);
    }

    &:last-child{
        align-self: flex-end;
    }

    > div{
        margin: 0.2rem 0;
        margin-left: 1rem;
    }
    
    span.comment{
        color: ${({theme}) => theme.text};
        margin-bottom: 1rem;
        display: block;
    }

    span.infoPurple{
        color: #c38cdd;
    }
    span.nameBlue{
        color: #7ac7e3;
    }

    @media(max-width:1450px){
        width: 19rem;
        padding: 1.5rem;
        font-size: 0.9rem;
    }
    @media(max-width:1000px){
        width: 100%;
        font-size: 1rem;
    }
`
