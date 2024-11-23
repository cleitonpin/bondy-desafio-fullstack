import { compare } from 'bcrypt'
import { User } from '../../../models/User'

export const loginUser = async (_parent, loginInput, _context, _info) => {
  const { password, email } = loginInput.input
  const user = await User.findOne({ email })
  const isPasswordValid = await compare(password, user.password)

  console.log({
    user,
    isPasswordValid,
  })
  if (!user) {
    throw new Error('Usuário não encontrado')
  }

  if (!isPasswordValid) {
    throw new Error('Senha inválida')
  }

  return user
}
