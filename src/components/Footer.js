import React from 'react'
import { withNamespaces } from 'react-i18next';

function Footer({t}) {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container d-flex justify-content-center">
                <span className="text-muted text-center">© Scorp {t('Inc.')} {new Date().getFullYear()}</span>
            </div>
        </footer>
    )
}
export default  withNamespaces()(Footer);
