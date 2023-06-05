import { useState } from 'react'
import './painelstyle.css'

export function Painel({setAnotacoes, setClassToggle, classToggle}) {

  const [tittle, setTittle] = useState('')
  const [text, setText] = useState('')

  const handleInputChange = (event) => {
    setTittle(event.target.value);
  }

  const handleInputChange2 = (event) => {
    setText(event.target.value);
  }

  return (
    <div className='painelContainer'>

      <input value={tittle} onChange={handleInputChange} className='inputAnotacao' placeholder='Título...' type="text" />
      <textarea value={text} onChange={handleInputChange2} className='textAnotacao' placeholder='Seu dia...' cols="30" rows="12"></textarea>

      <button onClick={() => [setAnotacoes( prevAnotacoes => [{tittle: tittle, text: text, id: Date.now()}, ...prevAnotacoes]), setClassToggle(!classToggle)] } className='btnPainel'>Criar anotação</button>

    </div>
  )
}