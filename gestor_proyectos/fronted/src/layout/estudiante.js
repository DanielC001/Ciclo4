import '../styles/styles.css'
import React from "react";
import Header from "../components/Headers/HeaderAdmin";
import { useEffect, useState } from 'react';
import { useAuth } from '../components/authContext'
import { useMutation, gql } from '@apollo/client'
import { useHistory } from 'react-router-dom'

const Layout = ({ children }) => {
    const styles = {
        contentDiv: {
            display: "flex",
        },
        contentMargin: {
            marginLeft: "10px",
            width: "100%",
        },
    };
    const VALIDATE_TOKEN = gql`
        mutation Mutation {
            validarToken {
                token
        }
      }
    `;
    const history = useHistory();
    const { authToken, setToken } = useAuth();
    const [loadingAuth, setLoadingAuth] = useState(true);
    const [validarToken, { data: dataMutation, loading: loadingMutation, error: errorMutation }] = useMutation(VALIDATE_TOKEN);

    useEffect(() => {
        validarToken();
    }, [validarToken]);

    useEffect(() => {
        if (dataMutation) {
            if (dataMutation.validarToken.token) {
                setToken(dataMutation.validarToken.token);
            }else{
                setToken(null);
                history.push('/login');
            } 
            setLoadingAuth(false);
        }
    }, [dataMutation, setToken,loadingAuth,history]);


    if(loadingAuth || loadingMutation) {
        return <div>Loading ...</div>
    }
    
    if(!authToken && loadingAuth){
        history.push('/login');
        window.location.reload();
    }
    return (
        <div className="mainContainer">
                    <Header />
            <main>{children}</main>
        </div>
    );
}

export default Layout;