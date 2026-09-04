function getStorageKey(movieId) {
    return `comentarios_${movieId}`;
}

export function getComments(movieId) {
    const data = localStorage.getItem(getStorageKey(movieId));
    return data ? JSON.parse(data) : [];
}

export function addComment(movieId, username, text) {
    const comments = getComments(movieId);
    const newComment = {
        id: Date.now(),
        username,
        text,
        date: new Date().toLocaleString("pt-BR"),
    };
    const updated = [...comments, newComment];
    localStorage.setItem(getStorageKey(movieId), JSON.stringify(updated));
    return updated;
}

export function deleteComment(movieId, commentId) {
    const comments = getComments(movieId);
    const updated = comments.filter((c) => c.id !== commentId);
    localStorage.setItem(getStorageKey(movieId), JSON.stringify(updated));
    return updated;
}