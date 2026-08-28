import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";

const Movie = () => {
    const { id } = useParams();
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movie, setMovie] = useState(null);
    const [copied, setCopied] = useState(false);
    const KEY = process.env.REACT_APP_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                setMovie(data);
            });
    }, [id, KEY]);

    const handleShare = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    if (!movie) {
        return (
            <div>
                <nav>
                    <h1>Movie</h1>
                </nav>
                <div className="container">
                    <h3>Carregando...</h3>
                </div>
            </div>
        );
    }

    return (
        <div>
            <nav>
                <h1>Movie</h1>
            </nav>
            <img
                className="img_movie"
                src={`${imagePath}${movie.poster_path}`}
                alt="{movie.title}"
            />
            <div className="container">
                <h1>{movie.title}</h1>
                <h3>Data de lançamento: {movie.release_date}</h3>
                <div className="descricao">
                    <h4>Descrição: </h4>
                    <p className="movie-desc">{movie.overview}</p>
                </div>

                <button className="link_button" onClick={handleShare}>
                    {copied ? "Link copiado! ✅" : "Compartilhar"}
                </button>

                <Link to="/">
                    <button className="link_button">Voltar</button>
                </Link>
            </div>
        </div>
    );
};

export default Movie;