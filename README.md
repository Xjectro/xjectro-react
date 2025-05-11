# 🚀 **@xjectro/react**

_A sleek, Tailwind-powered React UI component library with built-in theming, dark mode & more!_

## 📦 Features

* 🎨 **Dynamic Theme Support** via CSS variables
* 🌙 **Light/Dark Mode** out of the box (`.dark` variant)
* ✨ **Custom Animations** (accordion & shine effects)
* 📐 **Container Queries** & responsive utilities
* 🎥 **Vidstack Player** theme integration (`@vidstack/react/player`)

## 💿 Installation

```bash
npm install @xjectro/react
# or
yarn add @xjectro/react
```

## 🛠️ Setup

### 1️⃣ PostCSS Configuration
Create or update your `postcss.config.mjs` in project root:
```js
// postcss.config.mjs
export { default } from "@xjectro/react/postcss.config";
```

### 2️⃣ Global CSS Import
In your `globals.css` (or preferred top-level CSS), add:
```css
/* globals.css */
@import "@xjectro/react/theme.css";
```

### 3️⃣ Tailwind Preset Configuration
Instead of manual globs, use the Xjectro Tailwind preset in your `tailwind.config.ts` or `.js`:
```js
// tailwind.config.js or .ts
import xjectroPreset from '@xjectro/react/tailwind.preset'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  presets: [xjectroPreset],
  theme: { /* your overrides */ },
}
```
_The preset includes all necessary content globs for both your project and Xjectro components, plus theme extensions._

## ⚡ Usage Example
Wrap your app in the `Provider` to enable theming:
```tsx
// src/index.tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "./Provider";
import "./globals.css";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

Use components anywhere:
```tsx
import { Button, Card, Accordion } from ".";

export function Demo() {
  return (
    <Card>
      <h2 className="text-xl font-bold">Hello Xjectro!</h2>
      <Accordion>
        <Accordion.Item title="Click me">
          <p>Dynamic content here.</p>
        </Accordion.Item>
      </Accordion>
      <Button color="primary">Click Me</Button>
    </Card>
  );
}
```

## Usage Example

Wrap your application with the `Provider` component to enable theme support:

```tsx
import React from "react";
import { Provider } from "./Provider";

export function App({ children }) {
  return <Provider>{children}</Provider>;
}
```

## 🎨 Theme Customization

Override variables in your own CSS or edit `node_modules/@xjectro/react/styles/theme.css`:
```css
:root {
  --radius: 0.5rem;

  --xjectro-container-width: 1200px;
  --xjectro-container-padding: 5rem;
  
  --chart-1: 0.9 0.2 40.0;
  /* …other vars */
}

.dark {
  --chart-1: 0.5 0.2 40.0;
  /* …dark overrides */
}
```
You can also extend via your Tailwind config if preferred.

## 🤝 Contributing
1. Fork the repo
2. Create feature branch (`git checkout -b feat/my-component`)
3. Commit changes & add tests
4. Open a PR — we'll review & merge

## 📜 License
MIT © [Xjectro](https://github.com/Xjectro)
