interface CreateUserResponse {
    message: string;
    userId?: string;
    error?: string;
}

export const createUser = async (
    email: string,
    username: string,
    password: string
): Promise<CreateUserResponse> => {
    try {
        const response = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({ email, username, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data: CreateUserResponse = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Something went wrong!");
        }

        return data;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};
