const apiUrl = process.env.NEXT_PUBLIC_API_URL

interface UserData{
    username: string
    email: string
    password: string
    role: string
}


export const register = async (user: UserData): Promise<UserData> => {
    try {
        const response = await fetch(`${apiUrl}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })

        if (!response.ok) {
            throw new Error("Server Error")
        }

        const data: UserData = await response.json()
        return data
    } catch (error) {
        console.error("Error:", error)
        throw new Error("Error al registrar usuario")
    }
}
