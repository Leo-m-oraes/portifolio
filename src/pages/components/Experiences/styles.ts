import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  > section {
    width: 100%;
    margin-top: 7rem;
    display: flex;
    gap: 1.5rem;
    padding-bottom: 8rem;
    border-bottom: 0.3rem solid ${({theme})=> theme.backgroundLight};
    
    border-width: 0.3rem;
    margin-bottom: 2rem;

    @media (max-width: 1000px) {
      gap: 1rem;
      width: 100%;
      flex-direction: column;
    }
    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;
    }
  }
`;

export const ItemContainer = styled.div`
  > div {
    box-shadow: 1px 3px 22px 0px rgba(13, 13, 13, 1);
    -webkit-box-shadow: 1px 3px 22px 0px rgba(13, 13, 13, 1);
    -moz-box-shadow: 1px 3px 22px 0px rgba(13, 13, 13, 1);
    padding: 1rem;
    border-radius: 10px;
    padding-top: 2.5rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    transition: all 0.5s;
  }
  a {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    padding: 1rem 2rem;
    background: transparent;
    text-align: center;
    font-weight: 400;
    transition: transform 1s ease;
    color: ${({ theme }) => theme.textLight};
    

    &:hover::before {
      animation: animationButton 15s linear infinite forwards;
    }
    &:hover::after {
      background-color: transparent;
      animation: animationButton 15s linear infinite forwards;

      @keyframes animationButton {
        0% {
          background-position-x: 0%;
        }

        100% {
          background-position-x: -600%;
        }
      }
    }

    &:active {
      transform: translate(1px);
    }

    &::before {
      content: '';
      position: absolute;
      width: 110%;
      height: 350%;
      background-image: ${({ theme }) => theme.textGradientProject};
      background-size: 600% 200%;
      animation: animationButton 15s linear infinite forwards;
    }
    &::after {
      content: 'Ver projeto  →';
      position: absolute;
      background-color: #000000;
      width: 96%;
      height: 86%;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      
    }
  }

  h2 {
    color: ${({ theme }) => theme.secondary};
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  p {
    color: ${({ theme }) => theme.textLight};
    font-size: 1rem;
    font-weight: 300;
  }

  &:hover > div {
    filter: brightness(1.3);
    transform: translateY(-20px);
    cursor: pointer;
  }
  &:nth-child(even) > div {
    margin-top: 4rem;
  }

  @media (max-width: 1450px) {
    div {
      height: 21rem;
    }
    div > a {
      padding: 0.5rem 1rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 1000px) {
    > div {
      height: 15rem;
      padding-top: 1.5rem;
      margin-bottom: 2rem;

      > h2 {
        font-size: 2rem;
      }
      > p {
        font-size: 1rem;
      }
    }
    &:hover > div {
      transform: translateY(0);
    }
    &:nth-child(even) > div {
      margin-top: 0;
    }
  }
  @media (max-width: 700px) {
    &:nth-child(even) > div {
      margin-top: 0;
    }
    &:hover > div {
      transform: translateY(0);
    }
    > div {
      height: 20rem;
      padding: 2rem;

      > h2 {
        font-size: 2rem;
      }
      > p {
        font-size: 1.3rem;
      }
    }
  }
  @media (max-width: 454px) {
    &:nth-child(even) > div {
      margin-top: 0;
    }
    &:hover > div {
      transform: translateY(0);
    }
    > div {
      height: 20rem;
      padding: 2rem;

      > h2 {
        font-size: 1.5rem;
      }
      > p {
        font-size: 1rem;
      }
    }
  } ;
`;
