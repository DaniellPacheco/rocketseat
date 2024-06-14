import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.CORAL};
    font-size: 16px;

    > svg {
        margin-right: 5px;
        width: 16px;
    }
`;