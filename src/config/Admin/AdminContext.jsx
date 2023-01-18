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
        setTimeout(() => {
          setLoading(false);
        }, 1000);
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
      <div>
        <div className="flex justify-center bg-base-200 items-center h-screen">
          <div className="flex flex-col items-center gap-2">
            <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-primary/60" />
          </div>
        </div>
      </div>
    </AdminContext.Provider>
  );
};
