const apiUrl = process.env.NEXT_PUBLIC_API_URL

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
