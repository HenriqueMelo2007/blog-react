import { useState } from 'react'
import { Button } from '../button'
import './anotacaostyle.css'

export function Anotacao ({ tittle, text, id, anotacoes, setAnotacoes }) {

  function deleteAnotacao() {
    const novasAnotacoes = anotacoes.filter( item => item.id !== id)

    setAnotacoes(novasAnotacoes)
  }


  const [tittleAnotacao, setTittleAnotacao] = useState(tittle)
  const [textAnotacao, setTextAnotacao] = useState(text)

  const edittingTittle = (event) => {
    setTittleAnotacao(event.target.value);
  }
  const edittingText = (event) => {
    setTextAnotacao(event.target.value);
  }

  const [edit, setEdit] = useState(false)

  function editAnotacao() {
    setEdit(!edit)
  }

  return (
    <div className='boxAnotacao'>

      {!edit ? <input className='inputAnotacao' type="text" readOnly value={tittleAnotacao}/> : <input onChange={edittingTittle} className='inputAnotacao' type="text" value={tittleAnotacao} />}

      {!edit ? <textarea className='textAnotacao' readOnly value={textAnotacao} cols="10" rows="12"></textarea> : <textarea onChange={edittingText} className='textAnotacao' value={textAnotacao} cols="10" rows="12"></textarea>}
      
      
      

      <div className="boxButtons">

        <Button funcs={ () => deleteAnotacao()} text='Deletar' />

        <Button funcs={ () => editAnotacao()} text={!edit ? 'Editar' : 'Concluído'} /> 
      </div>

    </div>

  )
}