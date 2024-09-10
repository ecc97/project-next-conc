"use client"

import React from "react"
import { useState } from "react"
import Form from "@/components/form/Form"
import Label from "@/components/ui/Label.ui"
import Input from "@/components/ui/Input.ui"
import Button from "@/components/ui/Button.ui"
import { Container, CardForm, InputContent, TextError, ImageContainer, BackgroundForm } from "@/components/form/styledForm"
import Link from "next/link"
import Image from "next/image"
import { colors } from "@/app/GlobalStyles"

interface UserLogin {
    username: string
    password: string
}

const initialState: UserLogin = {
    username: "",
    password: "",
}


const Login: React.FC = () => {
    const [user, setUser] = useState<UserLogin>(initialState)
    const [error, setError] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError("")
        try {
            const response = await fetch(`http://localhost:4000/users?username=${user.username}`)

            if (!response.ok) {
                throw new Error('Server Error')
            }

            const data: UserLogin[] = await response.json()

            if(data.length > 0) {
                const userData = data[0]
                console.log('Success:', data)
                console.log('Login successfull!')
                setUser(initialState)
            } else {    
                setError('Invalid credentials')
            }
            
        } catch (error) {
            console.error('Error:', error)
            setError('Error')
        }
        console.log(user)
        setUser(initialState)
    }

    return (
        <Container>
            <CardForm>
                <h1>Iniciar Sesión</h1>
                <Form onSubmit={handleSubmit}>
                    <InputContent>
                        <Label label="Usuario" for="username" />
                        <Input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Usuario"
                            value={user.username}
                            onChange={handleChange}
                            $padding="1rem"
                            required
                        />
                    </InputContent>
                    <InputContent>
                        <Label label="Contraseña" for="password" />
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Contraseña"
                            value={user.password}
                            onChange={handleChange}
                            $padding="1rem"
                            required
                        />
                    </InputContent>
                    {error && <TextError>{error}</TextError>}
                    <Button type="submit" disabled={user.username === "" || user.password === ""} $bgColor={colors.white}>Ingresar</Button>
                    <p>¿No tienes una cuenta? <Link href="/pages/register">Registrarse</Link></p>
                </Form>
            </CardForm>
            <BackgroundForm />
        </Container>
    )
}

export default Login