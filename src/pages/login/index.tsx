import { useForm } from 'react-hook-form'
import api from '../../service/api'

interface Inputs {
  email: string,
  password: string
}
export default function Login () {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

  const onSubmit = async ({ email, password }: Inputs) => {
    await api.post('http://localhost:3333/login',
      {
        email,
        password
      }, {
        withCredentials: true
        // headers: {
        //   'Access-Control-Allow-Origin': 'http://localhost'
        // }

      })
      .then((result) => {
        console.log(result)
      })
      .catch(() => {
        console.log('não deu certo de novo')
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input type="text"
          {...register('email', {
            pattern: /\S+@\S+\.\S+/,
            required: 'Insira um nome valido',
            minLength: 8,
            maxLength: 32
          })}/>
        <label htmlFor="">Senha</label>
        <input type='text' {...register('password', {
          required: 'Insira uma senha valida'
        })}
        />
        {(errors.email || errors.password) &&
          <p> Email ou senha incorretos, tente novamente </p>
        }
        <button type='submit'>
          Confirmar
        </button>
      </form>
    </div>
  )
}
