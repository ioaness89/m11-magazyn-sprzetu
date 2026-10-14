import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg '>
            <div className='container-fluid'>
                
                <ul className='navbar-nav d-flex flex-row align-items-center gap-5'>
                    <li className='navbar-item'><p className='nav-brand mb-0 me-3'>IT Stock</p></li>
                    <li className='navbar-item'><Link className='navbar-link' to="/">Dashboard</Link></li>
                    <li className='navbar-item'><Link className='navbar-link' to="/inventory">Magazyn</Link></li>
                    <li className='navbar-item'><Link className='navbar-link' to="/inventory/new">+ Nowa pozycja</Link></li>
                </ul>
            </div>
        </nav>
    );
}


export default Navbar;