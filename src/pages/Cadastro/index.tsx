
export default function Cadastro () {
  return (
    <fieldset>
      <form action=''>
        <label htmlFor="nome">Nome</label>
        <input type='text' className='nome' />
        <label htmlFor="endereco">Endereço</label>
        <input type='text' className='endereco' />
        <label htmlFor="Cep">Cep</label>
        <input type='text' className='cep' />
      </form>
    </fieldset>
  )
}
