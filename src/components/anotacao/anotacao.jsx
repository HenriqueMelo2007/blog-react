import './anotacaostyle.css'

export function Anotacao ({ tittle, text }) {
  return (
    <div className='boxAnotacao'>
      
      <input className='inputAnotacao' type="text" readOnly value={tittle}/>
      <textarea className='textAnotacao' readOnly value={text} cols="10" rows="12"></textarea>

    </div>

  )
}