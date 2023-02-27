import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;

    > h1 {     
        font-size: 4.5rem;
        background-size: 800% 800%;
        background-image:  ${({theme}) => theme.textGradientProject};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: animateGradient 15s linear infinite forwards;
        
}

        @keyframes animateGradient {
        0% {
         background-position-x: 0% ;
        }
        
        100% {
        background-position-x: 600vw;
  }
    }
    > h2 {
        font-size: 3.5rem;
        font-weight: 400;
        background-size: 800% 800%;
        background-image:  ${({theme}) => theme.textGradientProject};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: animateGradient2 15s linear infinite forwards;
        
}

        @keyframes animateGradient2 {
        0% {
         background-position-x: -50% ;
        }
        
        100% {
        background-position-x: -600vw;
  }
        
    }

    @media(max-width:1000px){
        > h1 {
        font-size: 2.5rem;
    }
    
    > h2 {
        font-size: 1.8rem; 
    }
    }
    @media(max-width:500px){
        > h1 {
        font-size: 1.8rem;
    }

    > h2 {
        font-size: 1.2rem; 
    }
    }
`;
