import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    /* border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'}; */
    /* border: 1px dashed grey; */
    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.WHITE}` : 'none'};
    border-radius: 10px;

    margin-bottom: 8px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
    }

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.GRAY_300};
        background: transparent;

        border: none;
    }

    .button-delete,
    .button-add {
        color: ${({ theme }) => theme.COLORS.CORAL};
    }
`;