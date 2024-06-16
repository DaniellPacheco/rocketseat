import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 222px;

    display: flex;
    flex-direction: column;
    align-items: left;

    padding: 32px;
    gap: 15px;

    background: ${({ theme }) => theme.COLORS.CORAL_OPACITY};

    border-radius: 16px;

    > h2 {
        font-size: 24px;
    }

`;

export const Title = styled(Link)`
    text-decoration: none;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: bold;

    font-size: 24px;
`;

export const Tags = styled.div`
    width: 100%;

    display: flex;
    gap: 8px;
`;