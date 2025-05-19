````markdown
# React Native Product List App

A simple React Native application built with Expo and `expo-router` that displays a list of products and allows users to navigate to a detail page for each product.

---

## 🚀 Features

- Product listing screen
- Product detail screen
- Navigation using `expo-router`
- Pass data via URL query params

---

## 📦 Tech Stack

- React Native
- Expo
- expo-router
- JavaScript

---

## 📁 Project Structure

```
native-product-app/
├── app/
│   ├── index.tsx               # Home screen (product list)
│   └── detail-order.tsx        # Product detail screen
├── components/
│   └── ProductList.tsx         # Card component for products
├── assets/
│   └── data/
│       └── products.ts         # Sample product data
├── layout.tsx                  # Navigation stack layout
└── README.md
```

---

## 📦 Example Data (`assets/data/products.ts`)

```js
export default [
 {
    id: 1,
    name: 'Ultimate Pepperoni',
    image:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png',
    price: 12.99,
  },
  {
    id: 2,
    name: 'ExtravaganZZa',
    image:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/extravaganzza.png',
    price: 14.99,
  },
];
```


## 🧪 Run the App

1. Install dependencies:

```bash
yarn install
# or
npm install
```

2. Start the Expo project:

```bash
npm  start
```

3. Open it in your device or simulator.

---

## ❓FAQ

**Q: How do I navigate to the detail page?**  
A: Tap any product card. It will redirect using query string via `router.push`.

**Q: Why use `JSON.stringify` and `JSON.parse`?**  
A: Because URL parameters only support strings, so we convert objects to strings and back.

---

## 📃 License

This project is licensed under the MIT License.
````

