function getStorageKey(username) {
    return username ? `favoritos_${username}` : "favoritos_convidado";
}

export function getFavorites(username) {
    const data = localStorage.getItem(getStorageKey(username));
    return data ? JSON.parse(data) : [];
}

export function isFavorite(id, username) {
    const favorites = getFavorites(username);
    return favorites.some((movie) => movie.id === id);
}

export function toggleFavorite(movie, username) {
    const favorites = getFavorites(username);
    const exists = favorites.some((m) => m.id === movie.id);
    let updated;
    if (exists) {
        updated = favorites.filter((m) => m.id !== movie.id);
    } else {
        updated = [...favorites, { id: movie.id, title: movie.title, poster_path: movie.poster_path }];
    }
    localStorage.setItem(getStorageKey(username), JSON.stringify(updated));
    return updated;
}