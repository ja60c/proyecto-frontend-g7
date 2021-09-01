import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'
 
function NavigationBar() {
    const { currentUser } = useAuth();

    return (
        <Navbar bg="primary" variant="dark" expand="ls">
        <Container>
            <Navbar.Brand>Bienvenidx, { currentUser.email }</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={ Link } to="/new-post" className="btn btn-outline-light m-2">Nuevo post</Nav.Link>
                    <Nav.Link as={ Link } to="/profile" className="btn btn-outline-light m-2">Mi perfil</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavigationBar