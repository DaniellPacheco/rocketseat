import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    height: 105px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 42px 123px;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_800};

    > h1 {
        color: ${({ theme }) => theme.COLORS.CORAL};
        font-size: 24px;
    }
`;

export const Search = styled.div`
    width: 100%;
    margin: 0 100px;
`;

export const Profile = styled(Link)`
    width: 100%;
    max-width: 220px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: 24px;

        strong {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 14px;
        }

        a {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 14px;
            text-align: right;
        }
    }

    > img {
        width: 64px;
        height: 64px;
        
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_800};

        border-radius: 50%;
    }

`;