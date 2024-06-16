import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    'header'
    'content'
    ;

    > main {
        width: 1140px;
        margin: 0 auto;

        padding: 0 32px;

        overflow-y: auto;

        margin-top: 40px;

        &::-webkit-scrollbar {
        width: 8px;
    }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.COLORS.CORAL};; 
            border-radius: 10px;
        }
    }
    
`;

export const Form = styled.form`
   width: 100%;

   display: flex;
   flex-direction: column;


   > header {
    display: grid;
    gap: 24px;

    margin-bottom: 40px;
   }

   > div {
    display: flex;
    gap: 40px;

    margin-bottom: 40px;
   }

`;

export const Marcadores = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    margin-top: 40px;

    > h3 {
        font-size: 20px;

        margin-bottom: -16px;

        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    > div {
        display: flex;
        gap: 24px;

        background-color: ${({ theme }) => theme.COLORS.BLACK};

        border-radius: 8px;
        padding: 16px;
    }
`;

export const Actions = styled.div`
    width: 100%;

    display: flex;
    gap: 40px;
`;