import { Link, useLocation} from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const currentPage = useLocation().pathname;
  return (
    <div>
      <ul className="nav">
        <li className="nav-item"><Link to="/" className={currentPage === '/' ? 'nav-item active' : 'nav-item'}>
          Home
        </Link></li>
        <li className="nav-item"><Link to="/SavedCandidates" className={currentPage === '/SavedCandidates' ? 'nav-item active' : 'nav-item'}>
          Potential Candidates
        </Link></li>
        </ul>
    </div>
  )
};

export default Nav;
