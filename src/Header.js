import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [ { basket, user } ] = useStateValue();

    const login = ()=>{
        if (user){
            auth.signOut(); 
        }
    };

    // console.log(basket);

    return (
        <nav className="header">
            {/* Logo on the left -- Image */}
            <Link to="/">
            <img 
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt=""
            />
            </Link>

            {/* Serch bar */}
            <div className="header__search">
            <input type="Text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
            </div>
            {/* 3 links */}
            <div className="header__nav">

                {/* First Link */}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                    <span className="header__optionLineOne">Hello {user?.email}</span>
                    <span className="header__optionlinetwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>           
                </Link>

                {/* Second Link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionlinetwo">& Orders</span>
                    </div>           
                </Link>

                {/* Third Link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionlinetwo">Prime</span>
                    </div>           
                </Link>

                {/* Fourth Link */}
              
              <Link to="/checkout" className="header__link">
                  <div className="header__optionBasket">
                      {/* Shopping basket Icon */}
                      <ShoppingBasketIcon/>
                      {/* NUmber of items in the basket */}
                      <span className="header__optionlinetwo header__basketCount">{basket?.length}</span>
                  </div>
              </Link>

            </div>
            {/* Basket Icon With Number */}
        </nav>
    );
}

export default Header
