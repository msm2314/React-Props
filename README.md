# React Props — My Contacts

A small React practice app that renders **reusable contact cards** using props.
One component, three contacts, zero duplication — the whole point of the exercise.

Built while learning React (props, components, and `Array.map()` rendering) from a
guided contact-card challenge. The reference design it aims to match lives at
<https://c6fkx.csb.app/>.

## What it looks like

The app renders a "My Contacts" heading followed by a stack of cards. Each card
shows the contact's name, a circular avatar, phone number and email address.

## Getting started

```bash
git clone https://github.com/SM267/React-Props.git
cd React-Props
npm install
npm start
```

Then open <http://localhost:3000>.

To produce an optimised production build:

```bash
npm run build
```

### Node version note

This project pins `react-scripts@3.2.0`, which uses webpack 4. On Node 17+ that
fails with `ERR_OSSL_EVP_UNSUPPORTED` (webpack 4 asks OpenSSL for an MD4 hash that
modern Node no longer provides). Two ways around it:

- **Use Node 16** (`nvm use 16`), or
- keep your current Node and start with the legacy provider enabled:

  ```bash
  NODE_OPTIONS=--openssl-legacy-provider npm start
  ```

## Project structure

```
.
├── public/
│   ├── index.html      # page shell; links styles.css, holds #root
│   └── styles.css      # global styles (served statically)
└── src/
    ├── index.js        # entry point: renders the heading and the cards
    ├── App.jsx         # the card component, driven entirely by props
    └── contacts.js     # plain data — the list of contacts
```

## How the props work

`App` (which is really the card) takes a single props object and reads four fields
off it:

```jsx
function App(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img src={props.imgURL} alt="avatar_img" className="circle-img" />
      </div>
      <div className="bottom">
        <p className="info">{props.phone}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}
```

The parent passes those values in as JSX attributes:

```jsx
<App name="Beyonce" imgURL="..." phone="+123 456 789" email="b@beyonce.com" />
```

Because the card never hard-codes a person, the same component can render any
contact — swap the props, get a different card.

## Current state / next steps

The card component and its styling are done. The remaining tasks from the
original exercise are still open:

- [x] Style the card to match the reference design
- [x] Extract the contact card into a reusable component (`App.jsx`)
- [ ] Render the cards from `contacts.js` with `Array.map()` instead of three
      copy-pasted `<App />` elements (this is why the page currently shows the
      same Beyoncé card three times)
- [ ] Rename `App.jsx` → `Card.jsx` and add a real `App` component that owns the
      list

## Tech stack

React 16.8 · react-dom 16.8 · react-scripts 3.2 (Create React App)

## License

[MIT](LICENSE) © 2025 Shreyas Mahajan
