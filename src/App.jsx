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

// import { Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout/Layout';
// import Home from './pages/Home/Home';
// import Contacts from './pages/Contacts/Contacts';
// import Login from './pages/Login/Login';
// import Register from './pages/Register/Register';
// import PrivateRoute from './components/PrivateRoute';
// import RestrictedRoute from './components/RestrictedRoute';
// import styles from './App.module.css';

// const App = () => {
//   return (
//     <div className={styles.container}>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} className={styles.home} />
//           <Route path="/contacts" element={<PrivateRoute component={ContactsPage} redirectTo="/" />} /> 
//           <Route path="/login" element={<RestrictedRoute component={LoginPage} redirectTo="/contacts" />} />
//           <Route path="register" element={<RestrictedRoute><Register /></RestrictedRoute>} className={styles.register} />
//         </Route>
//       </Routes>
//     </div>
//   );
// };

// export default App;

// import { useEffect, lazy } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Routes, Route } from "react-router-dom";
// import { refreshUser } from "./redux/auth/operations";
// import { selectIsRefreshing } from "./redux/auth/selectors";
// import Layout from "./components/Layout";
// import PrivateRoute from "./components/PrivateRoute";
// import RestrictedRoute from "./components/RestrictedRoute";
// // import styles from "./App.module.css";

// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
// const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
// const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

// export const App = () => {
//   const dispatch = useDispatch();
//   const isRefreshing = useSelector(selectIsRefreshing);

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return isRefreshing ? (
//     <b>Refreshing user...</b>
//   ) : (
//     <Layout>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route
//           path="/register"
//           element={
//             <RestrictedRoute redirectTo="/contacts">
//               <RegisterPage />
//             </RestrictedRoute>
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <RestrictedRoute redirectTo="/contacts">
//               <LoginPage />
//             </RestrictedRoute>
//           }
//         />
//         <Route
//           path="/contacts"
//           element={
//             <PrivateRoute redirectTo="/login" component={<ContactsPage />}/>
//           }
//         />
//       </Routes>
//     </Layout>
//   );
// };

// export default App;

import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={RegistrationPage} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={LoginPage} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={ContactsPage} />
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
