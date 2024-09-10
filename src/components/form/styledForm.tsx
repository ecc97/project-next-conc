import styled from "styled-components";
import { colors } from "@/app/GlobalStyles";

interface StyledContainerProps {
    display?: string;
    $fC?: string;
}

export const Container = styled.div<StyledContainerProps>`
    display: flex;
    flex-direction: ${(props) => props.$fC || 'row'};
    background-color: ${colors.white};
    transition: background-color 0.3s ease-in-out;
    height: 100vh;
    `


export const CardForm = styled.div<{width?: string, height?: string}>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
    padding: 6rem;
    background-color: ${colors.secondary};
    
    h1 {
        color: ${colors.white};
        font-size: 32px;
        font-weight: bold;
        text-align: center;
        padding: 10px;
        border-top: 1px solid ${colors.secondary};
        border-bottom: 1px solid ${colors.secondary};
    }
    `

export const GroupTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colors.white};

    h1 {
        padding: 0;
    }
`

export const BackgroundForm = styled.div<{width?: string, height?: string}>`
    width: 50%;
    height: 100vh;
    background-image: url('/assets/img/arrendatario-servicio.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const FormContent = styled.form<{$bg?: string, color?: string}>`
    display: flex;
    flex-direction: column;
    gap: 2.625rem;
    color: ${(props) => props.color || colors.black};
    p {
        text-align: center;
    }
    a {
        font-style: italic;
        color: ${colors.white};
        text-decoration: none;
        &:hover {
            color: ${colors.primary};
        }
    }
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const TextError = styled.span`
    display: block;
    color: red;
    text-align: center;
    padding: 5px;
`