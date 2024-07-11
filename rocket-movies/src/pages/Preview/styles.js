import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
        'header'
        'tags'
        'content'
    ;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

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

export const Headerr = styled.div`
    display: grid;
    gap: 24px;

    margin-bottom: 40px;
`;

export const Movie = styled.div`
    display: flex;
    align-items: center;

    gap: 20px;
`;

export const Metatag = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    > div:first-child {

        display: flex;
        align-items: center;
        gap: 8px;


        img {
            width: 16px;
            height: 16px;
    
            color: ${({ theme }) => theme.COLORS.WHITE};

            border: 1px solid ${({ theme }) => theme.COLORS.GRAY_800};
            border-radius: 50%;
        }
    }

    > div:last-child {
        display: flex;
        align-items: center;
        gap: 8px;

        color: ${({ theme }) => theme.COLORS.CORAL};

        span {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    } 
`;

export const Tags = styled.div`
    margin: 40px 0;
`;

export const Resume = styled.div`
    text-align: justify;
    overflow-y: auto;
`;