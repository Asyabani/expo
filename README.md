# 🍕 PizzaPOS - React Native App

**PizzaPOS** is a simple React Native application built with **Expo** and **expo-router**. It allows users to choose a role as **User** or **Admin**, view a list of pizza menus, add items to a cart, and manage orders — all using dummy data.

---

## 🚀 Features

- Role selection: **User** or **Admin**
- 📋 Pizza menu screen
- 🛒 Cart screen
- 🧭 Navigation using `expo-router`
- Dummy data-based (no backend required)

---

## 🧰 Tech Stack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [expo-router](https://expo.github.io/router/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📁 Project Structure

```
native-test/
├── app/
│   ├── (admin)/              # Admin pages
│   ├── (user)/               # User pages
│   ├── _layout.tsx           # Main layout for routing
│   ├── index.tsx             # Role selection screen
│   ├── cart.tsx              # Cart page
│   └── +not-found.tsx        # Not found screen
├── components/
│   └── ui/                   # UI components (Button, ListItem, etc.)
├── constants/                # App constants and data
├── hooks/                    # Custom hooks
├── providers/                # Context providers
├── assets/                   # Images and static files
├── types.ts                  # Global types
└── README.md
```

---

## 🍕 Example Product Data

The dummy data is located in `constants` or `assets/data`. Example:

```ts
export default [
  {
    id: 1,
    name: 'Ultimate Pepperoni',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png',
    price: 50000,
  },
  {
    id: 2,
    name: 'ExtravaganZZa',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/extravaganzza.png',
    price: 60000,
  },
];
```

---

## 🧪 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the Expo project:
   ```bash
   npx expo start
   ```

3. Open the app on your device using the Expo Go app or use an emulator.

---

## ❓ FAQ

**Q: How do I choose a role (User/Admin)?**  
A: The app will ask you to choose your role on the home screen.

**Q: Is the data saved?**  
A: No, the app uses static dummy data for demonstration purposes.

**Q: Can I add new menu items?**  
A: Not yet — but this can be added through the `ProductList` component.

---

---

## 📃 License

MIT License
