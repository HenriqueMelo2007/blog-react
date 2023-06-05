import './painelstyle.css'

export function Painel() {


  return (
    <div className='painelContainer'>

      <input className='inputAnotacao' placeholder='Título...' type="text" />
      <textarea className='textAnotacao' placeholder='Seu dia...' cols="30" rows="12"></textarea>
      <button className='btnPainel'>Criar anotação</button>

    </div>
  )
}