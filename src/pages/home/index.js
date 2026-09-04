import { useEffect, useState } from "react";
import {
    Container,
    Movie,
    MovieList,
    Btn,
    CategoryMenu,
    CategoryButton,
    SectionTitle,
    SearchBar,
    MovieCard,
    FavoriteBtn,
} from "./style";
import { Link, useNavigate } from "react-router-dom";
import { getFavorites, toggleFavorite } from "../../utils/favorites";
import { getLoggedUser, logoutUser } from "../../utils/auth";

function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [topRated, setTopRated] = useState([]);
    const [search, setSearch] = useState("");
    const [favorites, setFavorites] = useState([]);
    const [loggedUser, setLoggedUser] = useState(null);
    const KEY = process.env.REACT_APP_KEY;
    const navigate = useNavigate();

    useEffect(() => {
        const user = getLoggedUser();
        setLoggedUser(user);
        setFavorites(getFavorites(user));
    }, []);

    const handleToggleFavorite = (movie) => {
        const updated = toggleFavorite(movie, loggedUser);
        setFavorites(updated);
    };

    const isFav = (id) => favorites.some((m) => m.id === id);

    const handleLogout = () => {
        logoutUser();
        setLoggedUser(null);
        setFavorites(getFavorites(null));
        navigate("/");
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                setGenres(data.genres);
            });
    }, [KEY]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            let url;

            if (search.trim() !== "") {
                url = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=pt-BR&query=${encodeURIComponent(search)}`;
            } else if (selectedGenre) {
                url = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=pt-BR&with_genres=${selectedGenre}`;
            } else {
                url = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`;
            }

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setMovies(data.results);
                });
        }, 500);

        return () => clearTimeout(timeout);
    }, [KEY, selectedGenre, search]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                setTopRated(data.results);
            });
    }, [KEY]);

    return (
        <Container>
            <h1>Movies</h1>

            {loggedUser ? (
                <p style={{ textAlign: "center" }}>
                    Olá, <strong>{loggedUser}</strong>!{" "}
                    <Btn onClick={handleLogout}>Sair</Btn>
                </p>
            ) : (
                <Link to="/login">
                    <Btn>Entrar / Cadastrar</Btn>
                </Link>
            )}

            <Link to="/favoritos">
                <Btn>Meus Favoritos ❤️</Btn>
            </Link>

            <SearchBar
                type="text"
                placeholder="Pesquisar filme..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <CategoryMenu>
                <CategoryButton
                    active={selectedGenre === null}
                    onClick={() => {
                        setSelectedGenre(null);
                        setSearch("");
                    }}
                >
                    Todos
                </CategoryButton>
                {genres.map((genre) => (
                    <CategoryButton
                        key={genre.id}
                        active={selectedGenre === genre.id}
                        onClick={() => {
                            setSelectedGenre(genre.id);
                            setSearch("");
                        }}
                    >
                        {genre.name}
                    </CategoryButton>
                ))}
            </CategoryMenu>

            <MovieList>
                {movies.map((movie) => {
                    return (
                        <Movie key={movie.id}>
                            <MovieCard>
                                <img
                                    src={`${imagePath}${movie.poster_path}`}
                                    alt="{movie.title}"
                                />
                                <FavoriteBtn onClick={() => handleToggleFavorite(movie)}>
                                    {isFav(movie.id) ? "❤️" : "🤍"}
                                </FavoriteBtn>
                            </MovieCard>
                            <span>{movie.title}</span>

                            <Link to={`/${movie.id}`}>
                                <Btn>Detalhes</Btn>
                            </Link>
                        </Movie>
                    );
                })}
            </MovieList>

            <SectionTitle>⭐ Melhores Avaliados</SectionTitle>

            <MovieList>
                {topRated.map((movie) => {
                    return (
                        <Movie key={movie.id}>
                            <MovieCard>
                                <img
                                    src={`${imagePath}${movie.poster_path}`}
                                    alt="{movie.title}"
                                />
                                <FavoriteBtn onClick={() => handleToggleFavorite(movie)}>
                                    {isFav(movie.id) ? "❤️" : "🤍"}
                                </FavoriteBtn>
                            </MovieCard>
                            <span>{movie.title}</span>

                            <Link to={`/${movie.id}`}>
                                <Btn>Detalhes</Btn>
                            </Link>
                        </Movie>
                    );
                })}
            </MovieList>
        </Container>
    );
}

export default Home;