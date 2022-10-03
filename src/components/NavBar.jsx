import { Link } from 'react-router-dom';
export function NavBar(){
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/profile">Profile</Link>
        </nav>
    )
}