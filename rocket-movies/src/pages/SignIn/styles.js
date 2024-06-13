import styled from "styled-components";

import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 147px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;

    > h1 {
        color: ${({ theme }) => theme.COLORS.CORAL};
        font-weight: bold;
        font-size: 48px;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 14px;
        text-align: left;
    }

    > h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 24px;
        margin: 48px 0;
        text-align: left;
    }

    > button {
        margin-top: 24px;
    }

    > a {
        color: ${({ theme }) => theme.COLORS.CORAL};
        margin-top: 48px;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;