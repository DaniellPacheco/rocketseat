import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    width: 100%;
    
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.CORAL};
    font-size: 16px;

    cursor: pointer;

    > svg {
        margin-right: 5px;
        width: 16px;
    }
`;