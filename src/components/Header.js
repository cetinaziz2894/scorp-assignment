import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Context } from '../context/Context';
import { Dropdown, DropdownButton, Image } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import trFlag from '../assets/img/turkey.png';
import enFlag from '../assets/img/united-kingdom.png';

import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';

function Header({t, setLoginModalShow}) {
    const {userInfo, setUserInfo} = useContext(Context);

    const logOutHandler = () => {
        setUserInfo({email:'', name:'', locale:'', password:''});
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      }

    return (
    <>
    <header className="header">
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container px-5 my-1">
            <Image src={logo} thumbnail height={60} width={60} className="mx-3"/>
            <Link className="navbar-brand" to="/">Scorp App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-1 my-1">
                        <Link className="nav-link" to="/contact-us">{t('Contact Us')}</Link>
                    </li>
                    <DropdownButton id="dropdown-item-button" title={t('Lang')} variant="secondary" className=" text-secondarymx-1 my-1">
                        <Dropdown.Item as="button" onClick={() => changeLanguage('en')}><Image src={enFlag} height={30} width={30}  className="mx-1  text-secondary"/>
                            {t('English')}</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => changeLanguage('tr')}><Image src={trFlag} height={30} width={30} className="mx-1  text-secondary"/>
                            {t('Turkish')}</Dropdown.Item>
                    </DropdownButton>
                    {
                        userInfo?.name ?
                        <>
                        <Dropdown className="d-inline mx-1 my-1">
                        <Dropdown.Toggle id="dropdown-autoclose-true">
                        {userInfo?.email}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="mx-2">
                            <Dropdown.Item onClick={() => logOutHandler()}>
                            {t('Log Out')}
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                        </> : <li className="nav-item mx-1 my-1">
                            <button className="btn btn-secondary nav-link" onClick={() => setLoginModalShow(true)}>{t('Log In')}</button>
                    </li>
                    }
                </ul>
            </div>
        </div>
        </nav>
        </header>
    </>)
}

export default withNamespaces()(Header);
