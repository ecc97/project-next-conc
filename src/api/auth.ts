const apiUrl = process.env.NEXT_PUBLIC_API_URL

interface UserData{
    username: string
    email: string
    password: string
    role: string
}

interface UserLogin {
    username: string
    password: string
}

export const login = async (userLogin: UserLogin): Promise<UserLogin | null> => {
    try {
        const response = await fetch(`${apiUrl}/users?username=${userLogin.username}`)
        
        if (!response.ok) {
            throw new Error('Server Error')
        }
        
        const data: UserLogin[] = await response.json()

        if(data.length > 0) {
            return data[0]
        }

        return null
    } catch (error) {
        console.error('Error in login function:', error)
        throw new Error('Error fetching user data')
    }
}

export const register = async (user: UserLogin): Promise<UserData> => {
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
