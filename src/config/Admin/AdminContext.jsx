import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({
          email: user.email,
        });
        setLoading(false);
      } else {
        setCurrentUser(null);
      }
    });
    return () => {
      unsub();
    };
  }, []);
  if (!Loading) {
    return (
      <AdminContext.Provider value={{ currentUser }}>
        {children}
      </AdminContext.Provider>
    );
  }
  return (
    <AdminContext.Provider value={{ currentUser }}>
      Loading State
    </AdminContext.Provider>
  );
};
