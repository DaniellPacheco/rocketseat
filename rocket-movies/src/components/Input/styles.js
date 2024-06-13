import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;

    > input {
        width: 100%;
        
        background: transparent;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GREY_300 };
        }
    }

    > svg {
        margin-right: 16px;
    }
`;