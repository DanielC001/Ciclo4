import '../styles/styles.css'
import React from "react";
import Header from "../components/Headers/HeaderAdmin";
import {useEffect} from 'react';
import {useAuth} from '../components/authContext'
import {useMutation,gql} from '@apollo/client'
import {useHistory} from 'react-router-dom'
import { Col, Row } from "reactstrap";
//import SideNavigation from "../components/SideNavigation";

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
    const {authToken,setToken} = useAuth();
    const history=useHistory();
    const [validarToken,{data:dataMutation,loading:loadingMutation,error:errorMutation}]= useMutation(VALIDATE_TOKEN);
    
    useEffect(()=>{
        validarToken()
    },[validarToken]);  

    useEffect(()=>{
        console.log('DM',dataMutation);
        if(dataMutation){
            if(dataMutation.validarToken.token){
                setToken(dataMutation.validarToken.token);
            }else{
                setToken(null);
            }
    }},[dataMutation]); 

    useEffect(()=>{
        console.log("Token Actual",authToken)
    },[authToken]);  

    if(loadingMutation) return <div>Loading ...</div>
    if(!authToken){
        history.push('/login')
        //return <div>Error</div>
    }

    return (
        <div className="mainContainer">
                    <Header />
            <main>{children}</main>
        </div>
    );
}

export default Layout;