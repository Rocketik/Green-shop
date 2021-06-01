 

import Home from './views/Home';
import Account from './views/Account';
import Cart from './views/Cart';
import Checkout from './views/Checkout';
 


const routes = [
    {
        href: "/",
        isEsact: true,
        text: "Home", 
        name: "home",
        component: Home,
    },
    {
        href: "/account",
        name: "account",
        text: "My Account",
        component: Account,
    },
    {
        href: "/cart",
        name: "cart",
        text: "Shopping Cart",
        component: Cart
    },
    {
        href: "/checkout",
        name: "checkout",
        text: "Checkout",
        component: Checkout
    },
     
]
export default routes