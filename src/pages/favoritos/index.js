import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    Container,
    MovieList,
    Movie,
    MovieCard,
    FavoriteBtn,
    Btn,
    EmptyMessage,
    ShareBtn,
} from "./style";
import { getFavorites, toggleFavorite } from "../../utils/favorites";
import { getLoggedUser } from "../../utils/auth";

function Favoritos() {
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const [favorites, setFavorites] = useState([]);
    const [copied, setCopied] = useState(false);
    const [loggedUser, setLoggedUser] = useState(null);

    useEffect(() => {
        const user = getLoggedUser();
        setLoggedUser(user);
        setFavorites(getFavorites(user));
    }, []);

    const handleToggleFavorite = (movie) => {
        const updated = toggleFavorite(movie, loggedUser);
        setFavorites(updated);
    };

    const handleShareList = () => {
        const ids = favorites.map((m) => m.id).join(",");
        const url = `${window.location.origin}/favoritos?lista=${ids}`;
        navigator.clipboard.writeText(url).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <Container>
            <h1>Meus Favoritos ❤️</h1>

            {loggedUser ? (
                <p style={{ textAlign: "center" }}>
                    Lista de <strong>{loggedUser}</strong>
                </p>
            ) : (
                <p style={{ textAlign: "center" }}>
                    Você não está logado — esses favoritos são temporários.{" "}
                    <Link to="/login">Faça login</Link> para salvar sua própria lista.
                </p>
            )}

            <Link to="/">
                <Btn>Voltar</Btn>
            </Link>

            {favorites.length > 0 && (
                <ShareBtn onClick={handleShareList}>
                    {copied ? "Lista copiada! ✅" : "Compartilhar minha lista"}
                </ShareBtn>
            )}

            {favorites.length === 0 ? (
                <EmptyMessage>
                    Você ainda não tem filmes favoritos. Volte para a Home e clique no coração dos filmes que gostar!
                </EmptyMessage>
            ) : (
                <MovieList>
                    {favorites.map((movie) => (
                        <Movie key={movie.id}>
                            <MovieCard>
                                <img
                                    src={`${imagePath}${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <FavoriteBtn onClick={() => handleToggleFavorite(movie)}>
                                    ❤️
                                </FavoriteBtn>
                            </MovieCard>
                            <span>{movie.title}</span>

                            <Link to={`/${movie.id}`}>
                                <Btn>Detalhes</Btn>
                            </Link>
                        </Movie>
                    ))}
                </MovieList>
            )}
        </Container>
    );
}

export default Favoritos;