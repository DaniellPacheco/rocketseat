import styled from "styled-components";

export const Container = styled.span`
    padding: 5px 16px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border-radius: 8px;
`;