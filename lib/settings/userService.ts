
export const changePasswordHandler = async (passwordData: {
    oldPassword: string;
    newPassword: string;
}) => {
    try {
        console.log(passwordData);
        const response = await fetch("/api/user/change-password", {
            method: "PATCH",
            body: JSON.stringify(passwordData),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(
                `HTTP error! status: ${response.status} - ${errorMessage}`
            );
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error changing password:", error);
        throw error;
    }
};
