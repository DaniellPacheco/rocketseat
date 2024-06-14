import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    font-size: 16px;

    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.CORAL};
`;