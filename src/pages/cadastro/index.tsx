import { StylePage } from './style'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Inputs {
  nome: string,
  cep: string,
  endereco: string,
  senha: string,
  confirm: string
}

export default function Cadastro () {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data: any) => console.log(data)

  return (
    <StylePage>
      <fieldset>
        <form onSubmit={handleSubmit(onSubmit)}>

          <label htmlFor="nome">Nome</label> <br />
          <input {...register('nome', { required: true })} /> <br />
          {errors.nome && <p>{errors.nome}</p>}

          <label htmlFor="endereco">Endereço</label> <br />
          <input {...register('endereco', { required: true })}/> <br />
          {errors.endereco && <p>{errors.endereco}</p>}

          <label htmlFor="Cep">Cep</label> <br />
          <input {...register('cep', { required: true })}/> <br />
          {errors.cep && <p>{errors.cep}</p>}

          <label htmlFor="endereco">Endereço</label> <br />
          <input {...register('endereco', { required: true })} /> <br />
          {errors.endereco && <p>{errors.nome}</p>}

          Digite uma Senha <br />
          <input {...register('senha', { required: true })} /> <br />
          {errors.senha && <p>{errors.senha}</p>}

          Confirme a senha <br />
          <input {...register('confirm', { required: true })} /> <br />
          {errors.confirm && <p>{errors.confirm}</p>}

        </form>
      </fieldset>
    </StylePage>
  )
}
