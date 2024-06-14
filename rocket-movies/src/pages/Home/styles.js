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

export const Add = styled.div`
    width: 100%;

    padding: 50px 123px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    
    `;

export const AddButton = styled.div`
    width: 200px;
`;

export const Movies = styled.div`
    width: 100%;

    padding: 50px 123px;

    display: flex;
    flex-direction: column;
    gap: 24px;

    overflow-y: auto;


    &::-webkit-scrollbar {
        width: 8px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.CORAL};; 
        border-radius: 10px;
    }
`;