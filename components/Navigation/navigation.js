import React from 'react'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavItem,NavLink,NavbarBrand,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap'

const nav = ()=>{
    return(
        <div>
        <Navbar color="light">
            <Nav>
                <NavbarBrand href='/'>
                    Paraíba Surfing
                </NavbarBrand>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle caret>
                            João Pessoa
                        </DropdownToggle>
                        <DropdownMenu down>
                            <DropdownItem>
                                <Link href='/joaopessoa/graminha'>
                                    <a>
                                        Graminha
                                    </a>
                                </Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link href='/joaopessoa/manaira'>
                                    <a>
                                        Manaíra
                                    </a>
                                </Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>


                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle caret>
                            Cabedelo
                        </DropdownToggle>
                        <DropdownMenu down>
                            <DropdownItem>
                                <Link href='/cabedelo/macaco'>
                                    <a>Macaco</a>
                                </Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link href='/cabedelo/dique'>
                                    <a>Dique</a>
                                </Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle caret>
                            Baía da Traição
                        </DropdownToggle>
                        <DropdownMenu down>
                            <DropdownItem>
                                <Link href='/baiadatraicao/forte'>
                                    <a>Forte</a>
                                </Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link href='/baiadatraicao/tamba'>
                                    <a>Tambá</a>
                                </Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link href='/baiadatraicao/valas'>
                                    <a>Valas</a>
                                </Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link href='/baiadatraicao/cardosas'>
                                    <a>Cardosas</a>
                                </Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle caret>
                            Conde
                        </DropdownToggle>
                        <DropdownMenu down>
                            <DropdownItem>
                                <Link href='/conde/coqueirinho'>
                                    <a>Coqueirinho</a>
                                </Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link href='/conde/arapuca'>
                                    <a>Arapuca</a>
                                </Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link href='/conde/praiabela'>
                                    <a>Praia Bela</a>
                                </Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle caret>
                            Mataraca
                        </DropdownToggle>
                        <DropdownMenu down>
                            <DropdownItem>
                                <Link href='/mataraca/barra'>
                                    <a>Barra de Camaratuba</a>
                                </Link>
                            </DropdownItem>
                            <DropdownItem>
                            <Link href='/mataraca/bocadabarra'>
                                    <a>Boca da Barra</a>
                                </Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

            </Nav>
        </Navbar>
        <style jsx global>
            {`
            li{
                margin:0 5px;
            }
            `}

        </style>
        </div>
    )
}

export default nav