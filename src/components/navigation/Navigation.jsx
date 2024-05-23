import { Link } from 'react-router-dom';
import './index.css'

export const Navigation = () => {
  return (
    <div className='container'>
      <Link to="/" className='nav-content'>Home</Link>
      <Link to="/pricing" className='nav-content'>Pricing</Link>
      <Link to="/about" className='nav-content'>About</Link>
    </div>
  )
}
