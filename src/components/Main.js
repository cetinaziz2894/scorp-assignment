import React from 'react';
import image from '../assets/img/scorp.jpeg';

import { withNamespaces } from 'react-i18next';


function Main({t}) {

    return (
        <>
        <header className="masthead text-center text-white">
            <div className="masthead-content">
                <div className="container px-5">
                    <h1 className="masthead-heading mb-0">{t('The most intimate')}</h1>
                    <h2 className="masthead-subheading mb-0">{t('social media in the world')}</h2>
                    <a className="btn btn-primary btn-lg rounded-pill mt-5" href="#scroll">{t('Learn More')}</a>
                </div>
            </div>
        </header>

        <section>
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5"><img className="img-fluid rounded-circle" src={image} alt="..." /></div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4">{t('PRIVACY POLICY')} !</h2>
                            <p>{t('text')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default withNamespaces()(Main);
