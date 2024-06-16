import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > header {
        width: 100%;
        height: 144px;

        display: flex;
        align-items: center;
        
        padding: 63px 144px;
        
        background-color: ${({ theme }) => theme.COLORS.CORAL_OPACITY};
        
    }
`;

export const Form = styled.div`
    max-width: 340px;
    margin: -93px auto 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div:nth-child(4),
    > button
     {
        margin-top: 24px;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 32px;

    width: 186px;
    height: 186px;

    > img {
        width: 186px;
        height: 186px;

        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;

        background-color: ${({ theme }) => theme.COLORS.CORAL};
        border-radius: 50%;

        position: absolute;
        bottom: 7px;
        right: 7px;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        }
    }
    
`;