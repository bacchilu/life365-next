'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

interface Category {
    Descrizione: string;
    ID_Categoria: number;
    slug: string;
}

export const LifeHeader: React.FC<{categories: Category[]}> = function ({categories}) {
    const pathname = usePathname();

    const menuItems = categories.map((category) => (
        <NavDropdown.Item key={category.ID_Categoria} href={`/${category.slug}`} as={Link}>
            {category.Descrizione}
        </NavDropdown.Item>
    ));
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Life365 Header</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" activeKey={pathname}>
                        <Nav.Link as={Link} href="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} href="/link">
                            Link
                        </Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            {menuItems}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export const LifeFooter = function () {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" fixed="bottom">
            <Container>
                <Navbar.Brand href="/">Life365 Footer</Navbar.Brand>
            </Container>
        </Navbar>
    );
};
