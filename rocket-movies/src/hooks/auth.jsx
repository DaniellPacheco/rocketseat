import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {

    const [data, setData] = useState({});

    async function signIn({ email, password }) {
        try {

            const response = await api.post("/sessions", { email, password });

            const { user, token } = response.data;

            localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
            localStorage.setItem("@rocketmovies:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({ user, token });
            
        } catch (error) {
            
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar!");
            }

        }
    }

    async function signUp({ email, password }) {
        try {
            const response = await api.post("/users", { email, password});

            const { message } = response.data;

            alert(message);

        } catch (error) {
            
        }
    }

    function signOut() {
        localStorage.removeItem("@rocketmovies:user");
        localStorage.removeItem("@rocketmovies:token");

        setData({});
    }

    async function updateProfile({ user, avatarFile }) {
        try {
            
            if(avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }

            await api.put("/users", user);

            localStorage.setItem("@rocketmovies:user", JSON.stringify(user));

            setData({ user, token: data.token });

            alert("Perfil atualizado com sucesso!");

        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi atualizar o perfil!");
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketmovies:token");
        const user = localStorage.getItem("@rocketmovies:user");
        
        if(token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ 
            signIn,
            signUp,
            signOut,
            updateProfile,
            user: data.user
        }}>
            {children}
        </AuthContext.Provider>
    );

}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}