import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.scss';
import { Layout } from './Layout';
import { AddContactView } from 'pages/AddContactView';
import { HomeView } from 'pages/HomeView';

export const App = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="add" element={<AddContactView />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
