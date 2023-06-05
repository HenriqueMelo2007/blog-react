import { useState } from 'react'
import { Anotacao } from '../../components/anotacao/anotacao'
import './diariostyle.css'
import { Painel } from '../../components/painelcriacao/painel'

export function Diario () {

  const [anotacoes, setAnotacoes] = useState([])

  const [classToggle, setClassToggle] = useState(false)




  return (
    <div className='containerDiario'>

      <div className='divButton' onClick={() => setClassToggle(!classToggle)}>
        <button className="bookmarkBtn">
          <span className="IconContainer">
            <p className='icon'>&#x1F4DD;</p>
          </span>
          <p className="text">{!classToggle ? 'CRIAR' : 'VOLTAR'}</p>
        </button>
      </div>

      {!classToggle && <div className='divConteudo'>
        {anotacoes.map( item => <Anotacao key={item.id} tittle={item.tittle} text={item.text} />)}
      </div>} 

      {console.log(anotacoes)}

      

      {classToggle && <div className="divConteudo"><Painel setAnotacoes={setAnotacoes} /></div>}

    </div>
  )
}