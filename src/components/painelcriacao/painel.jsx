import './painelstyle.css'

export function Painel({setAnotacoes}) {


  return (
    <div className='painelContainer'>

      <input className='inputAnotacao' placeholder='Título...' type="text" />
      <textarea className='textAnotacao' placeholder='Seu dia...' cols="30" rows="12"></textarea>
      <button onClick={() => setAnotacoes( prevAnotacoes => [{tittle: 'oi', text: 'olá', id: Date.now()}, ...prevAnotacoes])} className='btnPainel'>Criar anotação</button>

    </div>
  )
}