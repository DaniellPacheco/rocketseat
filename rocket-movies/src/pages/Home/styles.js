import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px 150px auto;
    grid-template-areas: 
    'header'
    'add'
    'content'
    ;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;