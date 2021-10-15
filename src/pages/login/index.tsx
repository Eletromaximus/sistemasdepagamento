import { useForm } from 'react-hook-form'
import api from '../../service/api'

interface Inputs {
  email: string,
  senha: string
}
export default function Login () {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

  const onSubmit = async (data: Inputs) => {
    await api.post('login', data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label {...register('email', {
          pattern: /\S+@\S+\.\S+/,
          required: 'Insira um nome valido',
          minLength: 8,
          maxLength: 32
        })}>Email</label>
        <input type="text" />
        <label htmlFor="">Senha</label>
        <input {...register('senha', {
          required: 'Insira uma senha valida'
        })}
        />
        {(errors.email || errors.senha) &&
          <p> Email ou senha incorretos, tente novamente </p>
        }
      </form>
    </div>
  )
}
