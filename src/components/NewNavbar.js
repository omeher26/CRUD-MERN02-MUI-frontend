import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)({
    background:'black',
    position:'static'
})

const Pg = styled(NavLink)({
    color:'yellow',
    fontSize:20,
    marginRight:20,
    textDecoration:'none'
})

const NewNavbar = () => {
  return (
    <>
        <Header>
            <Toolbar>
                <Pg to='/' >Code for Intreview</Pg>
                <Pg to={'/add'} >Add Users</Pg>
                <Pg to={'/allusers'}>All Users</Pg>
            </Toolbar>
        </Header>
    </>
  )
}

export default NewNavbar


