"use client"

import React from "react"
import { useState } from "react"
import Form from "@/components/form/Form"
import Label from "@/components/ui/Label.ui"
import Input from "@/components/ui/Input.ui"
import Select from "@/components/ui/Select.ui"
import Button from "@/components/ui/Button.ui"
import { Container, CardForm, GroupTitle, InputContent, ImageContainer, BackgroundForm } from "@/components/form/styledForm"
import Link from "next/link"
import { colors } from "@/app/GlobalStyles"
import Image from "next/image"


interface UserData{
    username: string
    email: string
    phone: string
    password: string
    role?: string
}

const initialState: UserData = {
    username: "",
    email: "",
    phone: "",
    password: "",
    role: "",
}

const Register: React.FC = () => {
    const [user, setUser] = useState<UserData>(initialState)
    const [error, setError] = useState<string>("")
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError("")

        try {
            const response = await fetch("http://localhost:4000/users", {
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
            console.log("Success:", data)
            console.log("User registered successfully!")
            console.log(user)
            setUser(initialState)
            
        } catch (error) {
            console.error("Error:", error)
            setError("Error al registrar usuario")
        }
    }
    return (
        <Container $fC="row-reverse">
            <CardForm>
                <GroupTitle>
                    <h1>Registrarse</h1>
                    <span>Para iniciar sesión</span>
                </GroupTitle>
                <Form onSubmit={handleSubmit}>
                    <InputContent>
                        <Label label="Nombre de usuario" for="username" />
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
                        <Label label="Correo electrónico" for="email" />
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Correo electrónico"
                            value={user.email}
                            onChange={handleChange}
                            $padding="1rem"
                            required
                        />
                    </InputContent>

                    <InputContent>
                        <Label label="Teléfono" for="phone" />
                        <Input
                            type="phone"
                            id="phone"
                            name="phone"
                            placeholder="Teléfono"
                            value={user.phone}
                            onChange={handleChange}
                            $padding="1rem"
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

                    <InputContent>
                        <Label label="Rol" for="role" />
                        <Select
                            id="role"
                            name="role"
                            value={user.role || ""}
                            onChange={handleChange}
                            $padding="1rem"
                            required
                        />
                    </InputContent>

                    {error && <p>{error}</p>}
                    <Button type="submit" disabled={ user.email === "" || user.username === "" || user.password === ""} $bgColor={colors.white}>Registrarse</Button>
                    <p>¿Ya tienes una cuenta? <Link href="/pages/login">Inicia sesión</Link></p>
                </Form>
            </CardForm>
            <BackgroundForm />
        </Container>
    )
}

export default Register