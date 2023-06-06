import { Button } from '../button'
import './anotacaostyle.css'

export function Anotacao ({ tittle, text, id, anotacoes, setAnotacoes }) {

  function deleteAnotacao() {
    const novasAnotacoes = anotacoes.filter( item => item.id !== id)

    setAnotacoes(novasAnotacoes)
  }

  return (
    <div className='boxAnotacao'>
      
      <input className='inputAnotacao' type="text" readOnly value={tittle}/>
      <textarea className='textAnotacao' readOnly value={text} cols="10" rows="12"></textarea>

      <div className="boxButtons">

        <Button funcs={ () => deleteAnotacao()} text='Deletar' />

        <Button text='Editar' /> 
      </div>

    </div>

  )
}