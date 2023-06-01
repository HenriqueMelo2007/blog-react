import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <h1>HM Blog</h1>

      <nav>
        <ul>
          <li>
            <Link className='linkPage' to='/'>Home</Link>
          </li>
          <li>
            <Link className='linkPage' to='/diario'>Diário Online</Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}