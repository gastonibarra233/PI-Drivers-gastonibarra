import { Link } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar.jsx'

export default function Nav({onSearch, random }) {
  return (
    <div>
      <Link to='/home'>
        <button>Home</button>
      </Link>
      <Link to='/about'>
        <button>About</button>
      </Link>
      <SearchBar onSearch={onSearch} />
      <button onClick={random}>Random</button>
    </div>
  );
}
