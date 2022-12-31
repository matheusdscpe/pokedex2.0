import styled from "styled-components";

export const ContainerHome = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #c0c0c0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardHome = styled.div`
    width: 80%;
    height: 80%;
    border-radius: .5rem;
    background-color: #ff4848;
    display: flex;
    align-item: center;
    flex-direction: column;
    box-shadow: 0px 2px 10px;
`
export const ContainerLogo = styled.img`
    width: ${(props)=>props.width || '100%'};
    padding: ${(props)=>props.padding || '0'};
    margin: 0 auto;
    filter: contrast(200%);
    animation: balance 5 s infinite linear;

    @keyframes balance {
        from {
            transform: rotate(0deg);
        }
        25%{
            transform: rotate(2deg);
        }
        75%{
            transform: rotate(-2deg);
        }
        to {
            transform: rotate(0deg);
        }
      }
`