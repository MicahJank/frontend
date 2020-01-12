import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import styled from "styled-components";
import SaltFeed from './SaltFeed';
import Login from './Login';
import List from './List';
import UserSearch from './UserSearch.js';
import HamburgerMenu from './HamburgerMenu.js';
import SavedList from './SavedList';

import { Menu, Segment } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSubway } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
width: 100%;
display:flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`;

const NavBar = styled.div`

      .navbar-menu {
            display: flex;

            .menu-left {
                  display: flex;
            }

      }
`;


const Navigation = props => {
      const [active, setActive] = useState('Salt Feed');

      const handleClick = name => {
            setActive(name);

            switch(name) {
                  case 'Salt Feed':
                        props.history.push('/dashboard');
                        break;
                  
                  case 'User Search':
                        props.history.push('/search');
                        break;
                  
                  case 'Saved':
                        props.history.push('/saved');
                        break;

                  case 'logout':
                        localStorage.clear();
                        props.history.push('/login');
                        break;
                  
                  default:
                        props.history.push('/dashboard');
            }
      }

  return (
      <>
    <NavBar>
      <Segment className='navbar-segment' color='orange' inverted>
            <Menu className='navbar-menu' inverted secondary>
                  <Menu.Item
                        name='Salt Feed'
                        active={active === 'Salt Feed'}
                        onClick={() => handleClick('Salt Feed')}
                  />
                  <Menu.Item
                        name='User Search'
                        active={active === 'User Search'}
                        onClick={() => handleClick('User Search')}
                  />
                  <Menu.Item
                        name='Saved'
                        active={active === 'Saved'}
                        onClick={() => handleClick('Saved')}
                  />
                  <Menu.Item
                        className='logout menu-right'
                        position='right'
                        name='logout'
                        active={active === 'logout'}
                        onClick={() => handleClick('logout')}
                  />
            </Menu>
      </Segment>


          </NavBar>
      <Container>
            <Route path ='/characters' component = {List} />
            <Route exact path ='/'component = {SaltFeed} />
            <Route path="/login" exact component={Login} />
            <Route path="/search" exact component={UserSearch} />
            <Route path="/saved" exact component={SavedList} />
      </Container>
      </>
   
  )};


 export default Navigation;