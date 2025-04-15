# Ziva Jewellery

A modern e-commerce platform for premium jewellery, built with React.

![Ziva Jewellery](https://via.placeholder.com/800x400?text=Ziva+Jewellery+Screenshot)

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Product Catalog**: Browse through various jewellery categories and products
- **Product Details**: View detailed information about each piece of jewellery
- **Shopping Cart**: Add and remove items, update quantities
- **Checkout Process**: Multi-step checkout with address and payment information
- **Order Confirmation**: Confirmation page with order details
- **Form Validation**: Client-side validation for all forms

## Technologies Used

- **React**: UI library for building the user interface
- **React Router**: For navigation and routing
- **Context API**: For state management (shopping cart)
- **CSS3**: For styling components
- **React Icons**: For icons across the application

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/ziva-jewellery.git
   cd ziva-jewellery
   ```

2. Install dependencies
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Start the development server
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
ziva-jewellery/
├── public/                  # Public assets
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header/          # Site header
│   │   ├── Footer/          # Site footer
│   │   └── ...              # Other components
│   ├── context/             # Context providers
│   │   └── CartContext.js   # Shopping cart context
│   ├── pages/               # Page components
│   │   ├── Home/            # Home page
│   │   ├── Products/        # Products listing page
│   │   ├── ProductDetail/   # Single product page
│   │   ├── Cart/            # Shopping cart page
│   │   └── Checkout/        # Checkout process pages
│   ├── App.js               # Main app component
│   ├── App.css              # Main styles
│   └── index.js             # Entry point
└── package.json             # Dependencies and scripts
```

## Checkout Flow

The checkout process is divided into multiple steps:

1. **Shipping Information**: Collecting address and contact details
2. **Payment Method**: Selection of payment method (Credit Card, UPI, Cash on Delivery)
3. **Order Confirmation**: Summary and confirmation of the order

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the Apache 2.0 - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from various premium jewellery brands
- Icons from [React Icons](https://react-icons.github.io/react-icons/) 