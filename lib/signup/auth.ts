import { compare, hash } from 'bcrypt'

export const hashPassword = async (password: string) => {
    try {
        const hashedPassword = await hash(password, 12)
        return hashedPassword
    } catch (e) {
        console.error('Error hashing password:', e)
        throw new Error('Error hashing password')
    }
}

export const verifyPassword = async (password: string, hashedPassword: string) => {
    const isValid = await compare(password, hashedPassword)
    return isValid
}