import { useState } from 'react'
import { Anotacao } from '../../components/anotacao/anotacao'
import './diariostyle.css'

export function Diario () {

  const [anotacoes, setAnotacoes] = useState([{tittle: 'oi', text: 'esse é meu textooo'}])

  return (
    <div className='containerDiario'>

      <div className='divButton'>
        <button className="bookmarkBtn">
          <span className="IconContainer">
            <p className='icon'>&#x1F4DD;</p>
          </span>
          <p className="text">CRIAR</p>
        </button>
      </div>

      <div className='divConteudo'>
        {anotacoes.map( item => <Anotacao tittle={item.tittle} text={item.text}/>)}
      </div>

    </div>
  )
}