import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;

    h1 {
        text-align: center;
        margin: 4rem 0;
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
    a {
        transition: all 0.3s;
    }
    a:hover {
        transform: scale(1.1);
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
    font-size: 12 px;
    cursor: pointer;
    transition: all 250ms;
`;



export const CategoryMenu = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 2rem;
`;

export const CategoryButton = styled.button`
    padding: 0.5rem 1.2rem;
    border: none;
    border-radius: 20px;
    background-color: ${(props) => (props.active ? "#e50914" : "#ffffff")};
    color: ${(props) => (props.active ? "#ffffff" : "#212121")};
    font-weight: 700;
    cursor: pointer;
    transition: all 200ms;

    &:hover {
        transform: scale(1.05);
    }
`;

export const SectionTitle = styled.h2`
    text-align: center;
    margin: 3rem 0 2rem;
`;

export const SearchBar = styled.input`
    display: block;
    margin: 0 auto 2rem;
    padding: 0.7rem 1.2rem;
    width: 100%;
    max-width: 400px;
    border: none;
    border-radius: 20px;
    font-size: 1rem;
    outline: none;
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