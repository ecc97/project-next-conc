"use client"

import React from "react"
import { useState } from "react"
import { register } from "@/api/register"
import Form from "@/components/form/Form"
import Label from "@/components/ui/Label.ui"
import Input from "@/components/ui/Input.ui"
import InputPassword from "@/components/ui/InputPassword.ui"
import Select from "@/components/ui/Select.ui"
import Button from "@/components/ui/Button.ui"
import { Container, ContainerForm, GroupTitle, InputContent, BackgroundForm } from "@/components/form/styledForm"
import Link from "next/link"
import { colors } from "@/app/GlobalStyles"
import Loader from "@/components/ui/Loader.ui"
import { FaEye, FaEyeSlash } from "react-icons/fa"

interface UserData{
    username: string
    email: string
    password: string
    role: string
}

const initialState: UserData = {
    username: "",
    email: "",
    password: "",
    role: "",
}

const Register: React.FC = () => {
    const [user, setUser] = useState<UserData>(initialState)
    const [error, setError] = useState<string>("")
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    
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
        setIsLoading(true)

        try {
            const data = await register(user)

            if (data) {
                console.log("Success:", data)
                console.log("User registered successfully!")
                console.log(user)
                setUser(initialState)
            }
            
        } catch (error) {
            console.error("Error:", error)
            setError("Error al registrar usuario")
        } finally {
            setTimeout(() => {
                setIsLoading(false)
            }, 2000)
        }
    }
    return (
        <Container $fC="row-reverse">
            <ContainerForm>
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
                        <Label label="Contraseña" for="password" />
                        <InputPassword
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder="Contraseña"
                            value={user.password}
                            onChange={handleChange}
                            $padding="1rem"
                            required
                            icon={
                                <span onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash color={colors.white} /> : <FaEye color={colors.white} />}
                                </span>
                            }
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
                    <Button type="submit" disabled={ user.email === "" || user.username === "" || user.password === "" || user.role === ""} $bgColor={colors.white}>
                        {isLoading ? (
                            <Loader />
                        ) : (
                            <span>Registrarse</span>
                        )}
                    </Button>
                    <p>¿Ya tienes una cuenta? <Link href="/pages/login">Inicia sesión</Link></p>
                </Form>
            </ContainerForm>
            <BackgroundForm />
        </Container>
    )
}

export default Register