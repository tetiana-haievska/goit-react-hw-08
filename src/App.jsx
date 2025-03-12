// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Contacts from './pages/Contacts/Contacts';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} className={styles.home} />
          <Route path="contacts" element={<PrivateRoute><Contacts /></PrivateRoute>} className={styles.contacts} />
          <Route path="login" element={<RestrictedRoute><Login /></RestrictedRoute>} className={styles.login} />
          <Route path="register" element={<RestrictedRoute><Register /></RestrictedRoute>} className={styles.register} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
