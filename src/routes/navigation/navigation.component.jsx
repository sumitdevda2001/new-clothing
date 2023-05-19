import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";

import { useState } from "react";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  NavigationContainer,
  NavLinkContainer,
  NavLink,
  LogoContainer,
} from "./navigation.style";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchItem from "../../components/search-item/searchItem.componet";
import PriceRangeSelect from "../../components/pricerange/price_range.component";


const Navigation = () => {
  const isCartOpen = useSelector(selectCartOpen);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleSignOut = () => {
    dispatch(signOutStart());
  };
  
  
  
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
         <span className="title-text"> CREN-CLOTHING </span>
        <NavLinkContainer>
        {location.pathname !== "/" && <PriceRangeSelect />}&nbsp;&nbsp;
          {location.pathname !== "/" && <SearchItem />}&nbsp;
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={handleSignOut}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <ToastContainer />
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
