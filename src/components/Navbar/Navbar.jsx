import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/userRedux';
import Badge from '@mui/material/Badge';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import styled from 'styled-components';

import { mediumScreen, smallScreen, mobile } from '../../responsive';

const Container = styled.div`
  height: 80px;
  background: #E3E6F3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Left = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  ${smallScreen({ width: '30%' })};
  ${mobile({ width: '40%' })};
`;

const SearchContainer = styled.div`
  border: 2px solid #3f51b5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 30px;
  border-radius: 50px;
  padding: 5px;
  ${mediumScreen({ width: '250px' })}
  ${mobile({ width: '150px' })}
`;

const Input = styled.input`
  border: none;
  background: none;
  height: 100%;
  width: 100%;
  padding: 0 5px;
  &:focus {
    outline: none;
  }
`;

const Center = styled.div`
  width: 30%;
  text-align: center;
  ${smallScreen({ width: '50%' })};
  ${mobile({ flex: 1 })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${smallScreen({ width: '20%' })};
`;

const MenuItem = styled.div`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin: 0 1.2rem;
  &:hover, :active {
    color: #088178;
  }
  ${mediumScreen({ margin: '0 0.8rem' })}
  ${smallScreen({ margin: '1.5rem 0.8rem' })}
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${smallScreen({ display: 'none' })};
`;

const Smallscreen = styled.div`
  display: none;
  ${smallScreen({ display: 'flex' })}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #E3E6F3;
  transition: 0.5s ease;
  z-index: 10;
`;

const ButtonClose = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector(state => state.cart.quantity);

  const handleClick = e => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <Container>
      <Left>
        <Logo>SHOP</Logo>
      </Left>
      <Center>
        <SearchContainer>
          <Input placeholder='Search' />
          <Search style={{ color: '#3f51b5', fontSize: 24 }} />
        </SearchContainer>
      </Center>
      <Right>
        <Links>
          <Link to='/'>
            <MenuItem>Home</MenuItem>
          </Link>
          <MenuItem>Shop</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
          {!user ? (
            <>
              <Link to='/register'>
                <MenuItem>Register</MenuItem>
              </Link>
              <Link to='/login'>
                <MenuItem>Sign In</MenuItem>
              </Link>
            </>
          ) : (
            <>
              <MenuItem>Profile</MenuItem>
              <MenuItem onClick={handleClick}>Log out</MenuItem>
            </>
          )}
          <Link to='/cart'>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Links>
        <Smallscreen>
          <MenuIcon 
            onClick={() => setToggleMenu(true)}
          />
        </Smallscreen>
      </Right>
      {toggleMenu && (
        <Wrapper>
          <ButtonClose>
            <CloseIcon 
              onClick={() => setToggleMenu(false)}
            />
          </ButtonClose>

          <Link to='/cart'>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
          <Link to='/'>
            <MenuItem>Home</MenuItem>
          </Link>
          <MenuItem>Shop</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
          {!user ? (
            <>
              <Link to='/register'>
                <MenuItem>Register</MenuItem>
              </Link>
              <Link to='/login'>
                <MenuItem>Sign In</MenuItem>
              </Link>
            </>
          ) : (
            <>
              <MenuItem>Profile</MenuItem>
              <MenuItem onClick={handleClick}>Log out</MenuItem>
            </>
          )}
        </Wrapper>
      )}
    </Container>
  );
};

export default Navbar;