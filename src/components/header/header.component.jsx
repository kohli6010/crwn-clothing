import React from 'react';
import { ReactComponent as Logo } from '../../assests/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.util';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <div className='logo-container'>
            <Link to='/'>
                <Logo />
            </Link>
        </div>
        <div className='options'>
            <Link to='/shop' className='option'>
                SHOP
            </Link>
            {/* 
				Clothes Link won't work right now,
				because no route as well as component 
				is created.
			 */}
            <Link to='/clothes' className='option'>
                CLOTHES
            </Link>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
            ) : (
                <Link to='/signin'>SIGN IN</Link>
            )}
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
