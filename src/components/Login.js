import React, { useContext } from 'react'
import { useState } from 'react';
import {
    Button,
    Modal,
    Alert,
    Form,
    Container
  } from "react-bootstrap";
import { Context } from '../context/Context';
import { countryList } from '../data/countryList';

import { withNamespaces } from 'react-i18next';

import i18n from '../i18n';

function Login({hideHandler, show, t}) {

    const {userInfo, setUserInfo} = useContext(Context);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [locale, setLocale] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleValidation = () => {
        let formValid = true;
        //Password
        if(!password){
            i18n.language === 'en' ? setErrorMessage("Password cannot be empty") : setErrorMessage("Şifre boş olamaz");
        }

        //Email
        if(!email){
            i18n.language === 'en' ? setErrorMessage("Email cannot be empty") : setErrorMessage("Email boş olamaz");
            formValid = false;
        }
        if(typeof email !== "undefined"){
          let lastAtPos = email?.lastIndexOf('@');
          let lastDotPos = email?.lastIndexOf('.');
          if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email?.indexOf('@@') === -1 && lastDotPos > 2 && (email?.length - lastDotPos) > 2)) {
            i18n.language === 'en' ? setErrorMessage("Email is not valid") : setErrorMessage("Email geçerli değil.");

            formValid = false;
          }
        }

        //Name
        if(!userName){
            i18n.language === 'en' ? setErrorMessage("Name cannot be empty") : setErrorMessage("İsim boş bırakılamaz.");
            formValid = false;
        }
        return formValid;
    }

    const submitHandler = () => {
        if(handleValidation()){
            setErrorMessage(null);
            hideHandler(false);
            setUserInfo({...userInfo,email:email, name:userName, locale:locale, password:password});
            setUserName(null);
            setEmail(null);
            setLocale(null);
            setPassword(null);
        }
    }
    return (
        <Modal show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header className="d-flex align-items-center justify-content-center">
                <Modal.Title id="contained-modal-title-vcenter">
                {t('Login')}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupName1">
                        <Form.Label>{t('Name')}</Form.Label>
                        <Form.Control type="text" placeholder="Name" onChange={e => {
                                    e.preventDefault();
                                    setUserName(e.target.value);
                                }}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail1">
                        <Form.Label>{t('Email')}</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={e => {
                                    e.preventDefault();
                                    setEmail(e.target.value);
                                }}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupLocale">
                    <Form.Label>{t('Locale')}</Form.Label>
                        <Form.Select 
                                    defaultValue={userInfo?.locale} 
                                    onChange={e => {
                                    e.preventDefault();
                                    setLocale(e.target.value);
                                }}>
                            {countryList.map((country) => (
                                <option key={country.value} value={country.value}>{country.label}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>{t('Password')}</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => {
                                    e.preventDefault();
                                    setPassword(e.target.value)
                                }}/>
                    </Form.Group>
                    {
                        errorMessage && <Alert variant={'danger'}>
                            {errorMessage}
                        </Alert>
                    }
                </Form>
                </Container>
            </Modal.Body>
            <Modal.Footer>     
                <Button type="submit" className="btn btn-danger btn-block" onClick={() => hideHandler(false)}>{t('Cancel')}</Button>
                <Button type="submit" className="btn btn-primary btn-block" onClick={() => submitHandler()}>{t('Login')}</Button>
            </Modal.Footer>
            </Modal>
    )
}
export default withNamespaces()(Login)