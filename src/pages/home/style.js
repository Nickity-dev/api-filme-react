import styled from "styled-components";

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem 1.25rem 4rem;
    min-height: 100vh;

    h1 {
        text-align: center;
        margin: 1.5rem 0 2.5rem;
        font-size: clamp(2.5rem, 6vw, 4.5rem);
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #f8fafc;
        text-shadow: 0 0 18px rgba(255, 255, 255, 0.15);
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 1rem;
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 1rem 0.8rem 1.2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.28);
    transition: transform 220ms ease, border-color 220ms ease;

    &:hover {
        transform: translateY(-6px);
        border-color: rgba(255, 255, 255, 0.22);
    }

    img {
        width: 100%;
        max-width: 220px;
        height: 290px;
        object-fit: cover;
        border-radius: 16px;
        margin-bottom: 1rem;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
    }

    span {
        font-weight: 700;
        font-size: 1rem;
        text-align: center;
        color: #f8fafc;
        min-height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        transition: all 0.25s ease;
        margin-top: 0.9rem;
    }

    a:hover {
        transform: scale(1.04);
    }
`;

export const Btn = styled.button`
    margin-top: 5px;
    padding: 0.8rem 1.6rem;
    border: none;
    border-radius: 999px;
    color: #111827;
    background: linear-gradient(135deg, #ffffff 0%, #dbeafe 100%);
    font-weight: 800;
    font-size: 0.82rem;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: all 250ms ease;
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.15);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 24px rgba(255, 255, 255, 0.2);
    }
`;

export const CategoryMenu = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.8rem;
    margin: 0 auto 2rem;
    max-width: 900px;
`;

export const CategoryButton = styled.button`
    padding: 0.7rem 1.2rem;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 999px;
    background: ${(props) => (props.active ? "linear-gradient(135deg, #ef4444, #b91c1c)" : "rgba(255,255,255,0.06)")};
    color: ${(props) => (props.active ? "#ffffff" : "#e5e7eb")};
    font-weight: 700;
    cursor: pointer;
    transition: all 200ms ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 18px rgba(239, 68, 68, 0.22);
    }
`;

export const SectionTitle = styled.h2`
    text-align: center;
    margin: 3rem 0 1.5rem;
    font-size: clamp(1.5rem, 3vw, 2.2rem);
    color: #f8fafc;
`;

export const SearchBar = styled.input`
    display: block;
    margin: 0 auto 2rem;
    padding: 0.9rem 1.1rem;
    width: 100%;
    max-width: 480px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.7);
    color: #f8fafc;
    font-size: 1rem;
    outline: none;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.03);

    &::placeholder {
        color: rgba(255, 255, 255, 0.56);
    }
`;

export const MovieCard = styled.div`
    position: relative;
`;

export const FavoriteBtn = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(15, 23, 42, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 50%;
    width: 38px;
    height: 38px;
    font-size: 1.15rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 200ms ease, background 200ms ease;

    &:hover {
        transform: scale(1.12);
        background: rgba(30, 41, 59, 0.96);
    }
`;