import styled from "styled-components";

import BackgroundImg from '../../assets/background.png';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 147px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
        color: ${({ theme }) => theme.COLORS.CORAL};
        font-weight: bold;
        font-size: 48px;
    }

    > h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 24px;
        margin: 48px 0;
        text-align: left;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 14px;
        text-align: left;
    }

    > button {
        margin-top: 24px;
    }

    > a {
        display: flex;
        justify-content: center;
        align-items: center;

        color: ${({ theme }) => theme.COLORS.CORAL};
        margin-top: 48px;

        svg {
            margin-right: 10px;
            font-size: 24px;
        }
    }
    
    
`;

export const Background = styled.div`
    flex: 1;
    background: url(${BackgroundImg}) no-repeat center center;
    background-size: cover;
`;