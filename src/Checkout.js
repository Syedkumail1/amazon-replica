import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import Subtotal from './Subtotal';

function Checkout() {
    const [ {basket} ] = useStateValue();

    return (
        <div className="checkout">
            <div Checkout__left>
            <img 
                className="checkout__ad" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRddPlscYCfuywTWshfL-XA7Do_ceZ-GFj3Gg&usqp=CAU"
                alt=""
            />
            {
                basket?.length === 0 ? (
                    <div>
                        <h1>Your Basket is Empty</h1>
                        <p>You dont have anything in your basket to put the items in the basket click "Add to Basket" under each website to add items. You can also buy more then one items</p>
                    </div>
                ) : (
                    <div>
                        <h1 className="checkout__title">Your Shopping Basket</h1>
                        {/* List of all the checkout products */}
                        {
                            basket?.map( item =>(
                                <CheckoutProduct
                                    id = {item.id}
                                    title = {item.title}
                                    image = {item.image}
                                    price = {item.price}
                                    rating = {item.rating}
                                />
                            ))
                        }
                    </div>
                )
            }
            </div>

            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal/>
                    {/* <Subtotal/> */}
                </div>
            )}
            
        </div>
    );
}

export default Checkout
