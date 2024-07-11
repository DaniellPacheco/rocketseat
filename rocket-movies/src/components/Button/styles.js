import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    width: 100%;
    height: 56px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: ${({ theme, deletebtn }) => deletebtn === 'true' ? theme.COLORS.BLACK : theme.COLORS.CORAL};
    color: ${({ theme, deletebtn }) => deletebtn === 'true' ? `${theme.COLORS.CORAL} !important` : `${theme.COLORS.BLACK} !important`};
    border: none;
    font-weight: 600;

    border-radius: 10px;
`;