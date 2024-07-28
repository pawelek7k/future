export const createUser = async (
    email: string,
    username: string,
    password: string
) => {
    const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ email, username, password }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Something went wrong!");
    }

    return data;
};