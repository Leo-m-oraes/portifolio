import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;

    > section{
        margin-top: 8rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8rem;
        color: #fff;

        @media(max-width:1000px ){
            gap: 5rem;
        }
        @media(max-width:700px ){
            gap: 3rem;
            flex-wrap: wrap;
            margin-top: 5rem;
        }
        
    }
`;

export const KnowledgeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .8rem;

    > p{
        color: ${({theme})=> theme.secondary};
        font-weight: 500;
        font-size: 1.5rem;
        text-transform: uppercase;
    }

    > svg {
        width: 6.5rem;
        height: 6.5rem;
        color: ${({theme})=> theme.secondary};
        transition: all .3s;
        cursor: pointer;    
    }

    &:hover{
        svg {
             opacity: .80;
             transform: scale(.95);
        }
    }

    @media(max-width:1000px ){
           >p{
            font-size: 1rem;
           }

           svg {
            width: 5rem;
            height: 5rem;
           }
        }
        @media(max-width:700px ){
           
        }

`
