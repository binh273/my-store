#### My Store Project
#### App components
+ Product list `product-list`: list of all product items on homepage
+ Product item `product-item`: single component that makes up product list
+ Product detail `product-item-detail`: detail of product when users navigate to single product with specific id
+ add-item-to-cart `add-to-cart`: add product to cart
+ header `header`: navigation header that stays on top of every route
+ Cart `cart`: checkout form with form validation and cart list
+ Cart-item `cart-item` : single component that makes up cart
+ Cart-item `cart-order` : single component that makes up cart
+ Confirm `confirm`: confirm page after successful checkout
##### Model:
+ Product
+ user

##### Service:
+ Product
+ Cart

##### Routing:
+ `/products`: product homepage 
+ `products/:id`: product item detail page 
+ `/cart`: cart checkout page 
+ `/confirm`: confirmation page
#### Build the project

Run `ng build` OR `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Installing dependencies

npm install

### Prettier ###

```
npm run prettier
```

### Linting ###

```
npm run lint
```
#### Run the project

Run `ng serve` OR `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.