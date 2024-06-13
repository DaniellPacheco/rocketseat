import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: ${({ theme }) => theme.COLORS.CORAL};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border: none;
    font-weight: 600;

    border-radius: 10px;
`;