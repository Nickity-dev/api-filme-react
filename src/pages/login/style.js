import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    padding: 2rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 350px;
    gap: 1rem;
`;

export const Input = styled.input`
    padding: 0.8rem 1rem;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    outline: none;
`;

export const Btn = styled.button`
    padding: 0.8rem 1rem;
    border: none;
    border-radius: 10px;
    background-color: #e50914;
    color: #ffffff;
    font-weight: 700;
    cursor: pointer;
    transition: all 200ms;

    &:hover {
        transform: scale(1.03);
    }
`;

export const ToggleText = styled.p`
    text-align: center;
    margin-top: 1rem;
    cursor: pointer;
    text-decoration: underline;
`;

export const Message = styled.p`
    text-align: center;
    color: ${(props) => (props.error ? "#ff6b6b" : "#4caf50")};
`;