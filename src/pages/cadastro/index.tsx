import { StylePage } from './style'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object({
  nome: yup.string().required().matches(/[a-zA-z]/, 'Apenas letras, por favor'),
  cep: yup.string()
    .required('Por favor insira um Cep válido')
    .matches(/[0-9]{8}/, 'Insira apenas números'),
  endereco: yup.string().required(),
  senha: yup.string().required(),
  confirm: yup.string().required()
})
interface Inputs {
  nome: string,
  cep: string,
  endereco: string,
  senha: string,
  confirm: string
}

export default function Cadastro () {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  })
  const onSubmit: SubmitHandler<Inputs> = (data: any) => console.log(data)

  return (
    <StylePage>
      <fieldset>
        <form onSubmit={handleSubmit(onSubmit)}>

          <label htmlFor="nome">Nome</label> <br />
          <input {...register('nome')} /> <br />
          {errors.nome?.type === 'required' && <p>Digite o nome, por favor</p>}

          <label htmlFor="cep">Cep</label> <br />
          <input {...register('cep')}
            maxLength={8}
          />
          <br />
          {errors.cep?.message && <p>{errors.cep?.message}</p>}

          <label htmlFor="endereco">Endereço</label> <br />
          <input {...register('endereco')} /> <br />
          {errors.endereco?.type === 'required' && (<p>Digite o endereço, por favor</p>)}

          Digite uma Senha <br />
          <input {...register('senha')} /> <br />
          {errors.senha?.type === 'required' && (<p>Informe uma senha valida, por favor</p>)}

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
