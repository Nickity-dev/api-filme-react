export function getUsers() {
    const data = localStorage.getItem("usuarios");
    return data ? JSON.parse(data) : [];
}

export function registerUser(username, password) {
    const users = getUsers();

    const exists = users.some((u) => u.username === username);
    if (exists) {
        return { success: false, message: "Esse usuário já existe." };
    }

    const updated = [...users, { username, password }];
    localStorage.setItem("usuarios", JSON.stringify(updated));
    return { success: true, message: "Cadastro realizado com sucesso!" };
}

export function loginUser(username, password) {
    const users = getUsers();
    const user = users.find((u) => u.username === username && u.password === password);

    if (!user) {
        return { success: false, message: "Usuário ou senha incorretos." };
    }

    localStorage.setItem("usuarioLogado", username);
    return { success: true, message: "Login realizado com sucesso!" };
}

export function logoutUser() {
    localStorage.removeItem("usuarioLogado");
}

export function getLoggedUser() {
    return localStorage.getItem("usuarioLogado");
}