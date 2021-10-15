import { StylePage } from './style'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../service/api'

const schema = yup.object({
  name: yup
    .string()
    .required()
    .matches(/[a-zA-z]/, 'Apenas letras, por favor'),
  email: yup.string().email('Formato de emai invalido').required(),
  password: yup
    .string()
    .required()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/),
  confirm: yup.string().required()
})
interface Inputs {
  name: string,
  email: string,
  password: string,
  confirm: string
}

export default function Cadastro () {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    if (data.confirm === data.password) {
      const { name, email, password } = data

      const info = { name, email, password }

      await api.post('users', info)
        .catch((error) => console.log(error.status))
    } else {
      alert('As senhas não correspondem, tente novamente')
    }
  }

  return (
    <StylePage>
      <fieldset>
        <form onSubmit={handleSubmit(onSubmit)}>

          <label htmlFor="nome">Nome</label> <br />
          <input {...register('name')} /> <br />
          {errors.name?.type === 'required' && <p>Digite o nome, por favor</p>}

          <label htmlFor="email">email</label> <br />
          <input {...register('email')} />
          <br />
          {errors.email?.message && <p>{errors.email?.message}</p>}

          Digite uma Senha <br />
          <input {...register('password')} /> <br />
          {errors.password?.type === 'required' && (<p>Informe uma senha valida, por favor</p>)}

          Confirme a senha <br />
          <input {...register('confirm')} /> <br />

          <button
            type='submit'
          >
            Confirmar
          </button>
        </form>
      </fieldset>
    </StylePage>
  )
}
