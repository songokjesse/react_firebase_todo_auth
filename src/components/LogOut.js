import React from 'react';
import firebase from '../config/firebase';
const logOutUser = () => {
    firebase.auth().signOut();
};
const LogOut = () => {
    return <button onClick={logOutUser} children="Log Out" />;
};
export default LogOut;
