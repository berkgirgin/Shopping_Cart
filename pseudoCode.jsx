/*
refer to the below video for ideas
https://www.youtube.com/watch?v=lATafp15HWA

DON'T FORGET TESTING!!!!

MISC
use PropTypes
make a loading screen, ?also loading icon for cards?
Maybe try a login feature?

FETCH
decide what to use for fetching shopping data
check what API provides, mock it in the beginning

ROUTING
/home, /store, /about in the NavBar

/store
> use dynamic routes store items

/shopping_cart
display the shopping items

NAVBAR
>should always be visible

when cart is not empty
> display a cart icon with the number of items in the cart

Add a search bar
optional: add a liked items button
this Search bar is on the StoraPage(not NavBar)
useSearchParams()


HOMEPAGE
start with an empty page with a link to Store
this is purely optional, make it look nice though
ideally make it so that u scroll down for further content

STORE PAGE

make cards(different for Store and Cart)

> use dynamic routes store items

STORE PAGE CARDS
Item Title, Item Price

button add to Cart
>this then renders {-, count(default is 1), +}, {remove button}
>when count goes down to 0, remove the above and render the button add to Cart

SHOPPING CART PAGE
this should render from the right side, covering some of the page


SHOPPING CART Context(useContext)
wrap everything in this context.Provider

currentCart= [{...item, quantity:1}, {...item, quantity:3}]
getTotalItemCount() {
for loop 
}

USELOCALSTORAGE
make it so that refreshing page does not delete the Cart




*/
