
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

function Favoritos() {
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const [favorites, setFavorites] = useState([]);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        setFavorites(getFavorites());
    }, []);

    const handleToggleFavorite = (movie) => {
        const updated = toggleFavorite(movie);
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
