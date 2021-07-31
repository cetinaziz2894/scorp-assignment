import React, { useState, useContext, useEffect }  from 'react'
import { Container,Form, Row, Col, Button, FloatingLabel } from 'react-bootstrap';
import { Context } from '../context/Context';
import { countryList } from '../data/countryList';
import Select from 'react-select'
import { withNamespaces } from 'react-i18next';
function ContactUsPage({t}) {

    const {userInfo} = useContext(Context);

    const [formData, setFormData] = useState({name:null,email:null,phonenumber:null,country_code:null,text:null});

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }
      setValidated(true);
      console.log(formData)
      console.log(JSON.stringify(formData))
    };

    useEffect(() => {
        if (userInfo) {
            setFormData({...formData,name:userInfo?.name, email:userInfo?.email});
        }
    }, [userInfo])

    return (
        <Container className="container my-5 w-100 d-flex justify-content-center align-items-center">
            <Col xs={12} md={8}>
            <h1>{t('Contact Us Form')}</h1>
                <Row className="d-flex justify-content-center align-items-center">
                    <Form className="w-100" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-2" controlId="formGroupName">
                        <Form.Label>{t('Name')}</Form.Label>
                        <Form.Control
                            required
                            type="text" 
                            placeholder={t('Name')} 
                            value={formData.name || ""} 
                            onChange={e => 
                                {
                                    e.preventDefault();
                                    setFormData({...formData,name:e.target.value});
                                }}
                                />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formGroupEmail">
                        <Form.Label>{t('Email')}</Form.Label>
                        <Form.Control 
                            required
                            type="email" 
                            value={formData?.email || ""} 
                            placeholder={t('Enter email')} 
                            onChange={e => {
                                    e.preventDefault();
                                    setFormData({...formData,email:e.target.value});
                                }}/>
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formGroupPhoneNumber">
                        <Form.Label>{t('Phone Number')}</Form.Label>
                        <Form.Control 
                            required
                            type="tel"
                            placeholder="0545-678-9000"
                            size="11"
                            minLength="11" 
                            maxLength="11"
                            onChange={e => {
                                    e.preventDefault();
                                    setFormData({...formData,phonenumber:e.target.value});
                                }}/>
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formGroupLocale">
                        <Form.Label>{t('Locale')}</Form.Label>
                        <Select 
                            options={countryList} 
                            onChange = { e => {
                                setFormData({...formData,country_code:e.value});
                            }
                        }/>
                    </Form.Group>
                    <Form.Label>{t('Text')}</Form.Label>
                    <FloatingLabel className="mb-2" controlId="floatingTextarea2" label={t('Message')}>
                        <Form.Control
                        formNoValidate
                        as="textarea"
                        style={{ height: '100px' }}
                        onChange={e => {
                            e.preventDefault();
                            setFormData({...formData,text:e.target.value});
                                }}/>
                    </FloatingLabel>
                    <Col xs="auto" className="d-flex my-1 justify-content-end">                    
                        <Button type="submit" className="btn btn-success  btn-block my-1 mb-3">{t('Send')}</Button>
                    </Col>
                </Form>
                </Row>
            </Col>        
        </Container>
            )
}

export default withNamespaces()(ContactUsPage);