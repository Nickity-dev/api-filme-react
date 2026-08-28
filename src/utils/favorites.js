export function getFavorites() {
    const data = localStorage.getItem("favoritos");
    return data ? JSON.parse(data) : [];
}

export function isFavorite(id) {
    const favorites = getFavorites();
    return favorites.some((movie) => movie.id === id);
}

export function toggleFavorite(movie) {
    const favorites = getFavorites();
    const exists = favorites.some((m) => m.id === movie.id);
    let updated;
    if (exists) {
        updated = favorites.filter((m) => m.id !== movie.id);
    } else {
        updated = [...favorites, { id: movie.id, title: movie.title, poster_path: movie.poster_path }];
    }
    localStorage.setItem("favoritos", JSON.stringify(updated));
    return updated;
}