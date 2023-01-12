import React, { useContext, useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useSearchParams } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { AdminContext } from '../../config/Admin/AdminContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { currentUser } = useContext(AdminContext);
  const [Error, setError] = useState(false);
  const [searchParams] = useSearchParams();
  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .catch(() => {
        setError(true);
      });
  };
  useEffect(() => {
    if (currentUser) {
      const returnUrl = searchParams.get('returnUrl');
      window.location.href = returnUrl || '/';
    }
  }, [currentUser, searchParams]);
  return (
    <div className="flex justify-center">
      <div className="bg-base-300 max-w-sm shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <input
            onChange={
            (e) => setEmail(e.target.value)
           }
            className="input input-primary w-full"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <input
            onChange={
            (e) => setPassword(e.target.value)
           }
            className="input input-primary w-full"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={
            handleSubmit
          }
            className="btn btn-sm btn-primary"
            type="button"
          >
            Sign In
          </button>

        </div>
        {
            Error && (
            <p className="text-error text-xs italic">
              You are not allowed to access this page.
            </p>
            )
          }
      </div>
    </div>
  );
};

export default Login;
