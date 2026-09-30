import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./styles.css";
import { getComments, addComment, deleteComment } from "../../utils/comments";
import { getLoggedUser } from "../../utils/auth";

const Movie = () => {
    const { id } = useParams();
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movie, setMovie] = useState(null);
    const [copied, setCopied] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [loggedUser, setLoggedUser] = useState(null);
    const KEY = process.env.REACT_APP_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                setMovie(data);
            });
    }, [id, KEY]);

    useEffect(() => {
        setLoggedUser(getLoggedUser());
        setComments(getComments(id));
    }, [id]);

    const handleShare = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const handleAddComment = (e) => {
        e.preventDefault();
        if (newComment.trim() === "") return;

        const updated = addComment(id, loggedUser, newComment);
        setComments(updated);
        setNewComment("");
    };

    const handleDeleteComment = (commentId) => {
        const updated = deleteComment(id, commentId);
        setComments(updated);
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
        <div className="movie-page">
            <nav className="movie-nav">
                <h1>Movie</h1>
            </nav>

            <div className="movie-hero">
                <div className="poster-box">
                    <img
                        className="img_movie"
                        src={`${imagePath}${movie.poster_path}`}
                        alt={movie.title}
                    />
                </div>

                <div className="container">
                    <span className="movie-tag">Filme</span>
                    <h1>{movie.title}</h1>
                    <h3>Data de lançamento: {movie.release_date}</h3>

                    <div className="descricao">
                        <h4>Descrição</h4>
                        <p className="movie-desc">
                            {movie.overview || "Descrição não disponível no momento."}
                        </p>
                    </div>

                    <div className="movie-actions">
                        <button className="link_button" onClick={handleShare}>
                            {copied ? "Link copiado! ✅" : "Compartilhar"}
                        </button>

                        <Link to="/">
                            <button className="link_button secondary">Voltar</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="comments-section">
                <h4>Comentários</h4>

                {loggedUser ? (
                    <form className="comment-form" onSubmit={handleAddComment}>
                        <input
                            type="text"
                            className="comment-input"
                            placeholder="Escreva um comentário..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                        <button type="submit" className="comment-submit">
                            Enviar
                        </button>
                    </form>
                ) : (
                    <p className="login-warning">
                        <Link to="/login">Faça login</Link> para comentar este filme.
                    </p>
                )}

                {comments.length === 0 ? (
                    <p className="comments-empty">Nenhum comentário ainda. Seja o primeiro!</p>
                ) : (
                    comments.map((comment) => (
                        <div className="comment-item" key={comment.id}>
                            <div className="comment-header">
                                <span className="comment-username">{comment.username}</span>
                                <span className="comment-date">{comment.date}</span>
                            </div>
                            <p>{comment.text}</p>
                            {loggedUser === comment.username && (
                                <button
                                    className="comment-delete"
                                    onClick={() => handleDeleteComment(comment.id)}
                                >
                                    Apagar
                                </button>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Movie;