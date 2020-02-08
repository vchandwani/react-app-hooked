import React, { useState, useEffect } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../ReactAux/ReactAux';

const withErrorHandler = ( WrappedComponent, axios ) => {
    return props => {

        const [error,setError] = useState(null);
        state = {
            error: null
        }

        const reqInterceptor = axios.interceptors.request.use( req => {
            setError(null);
            return req;
        } );
        const resInterceptor = axios.interceptors.response.use( res => res, error => {
            setError(error);
        } );
 
        useEffect(() => {
            axios.interceptors.request.eject(reqInterceptor );
            axios.interceptors.response.eject(resInterceptor );
        },[reqInterceptor,resInterceptor]);
        
        const errorConfirmedHandler = () => {
            setError(null);
        }

        return (
            <Aux>
                <Modal
                    show={error}
                    modalClosed={errorConfirmedHandler}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Aux>
        );
    }
}

export default withErrorHandler;