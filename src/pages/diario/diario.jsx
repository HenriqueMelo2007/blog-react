import './diariostyle.css'

export function Diario () {
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
        <p>teste</p>
      </div>

    </div>
  )
}