import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../ReactAux/ReactAux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = props => {   
    const [showSideDrawerVisible,setShowSideDrawerVisible] = useState(false);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawerVisible(false);
    }

    const sideDrawerToggleHandler = () => {
        setShowSideDrawerVisible(!showSideDrawerVisible);
    }
    
    return (
        <Aux>
            <Toolbar
                isAuth={props.isAuthenticated}
                drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer
                isAuth={props.isAuthenticated}
                open={showSideDrawerVisible}
                closed={sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect( mapStateToProps )( layout );