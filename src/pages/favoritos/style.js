import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;

    h1 {
        text-align: center;
        margin: 2rem 0;
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 220px));
    justify-content: center;
    column-gap: 3rem;
    row-gap: 4rem;
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    img {
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }
    span {
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    }
`;

export const MovieCard = styled.div`
    position: relative;
`;

export const FavoriteBtn = styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
    background: rgba(0, 0, 0, 0.6);
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 200ms;

    &:hover {
        transform: scale(1.15);
    }
`;

export const Btn = styled.button`
    margin-top: 5px;
    padding: 0.7rem 3rem;
    border: none;
    border-radius: 15px;
    color: #212121;
    background-color: #ffffff;
    font-weight: 1000;
    font-size: 12px;
    cursor: pointer;
    transition: all 250ms;

    &:hover {
        transform: scale(1.1);
    }
`;

export const EmptyMessage = styled.p`
    text-align: center;
    font-size: 1.2rem;
    margin-top: 3rem;
`;

export const ShareBtn = styled.button`
    display: block;
    margin: 0 auto 2rem;
    padding: 0.7rem 2rem;
    border: none;
    border-radius: 15px;
    color: #ffffff;
    background-color: #e50914;
    font-weight: 700;
    cursor: pointer;
    transition: all 250ms;

    &:hover {
        transform: scale(1.05);
    }
`;