import styled from "styled-components";

import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    
    text-align: center;

    > a {
        color: ${({ theme }) => theme.COLORS.CORAL};
    }
`;