import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { motion } from 'framer-motion';

const ContactFrom = () => {
  const [state, handleSubmit] = useForm('xpznrobn');

  return (
    <motion.form
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      exit={{ y: 100, opacity: 0, transition: { delay: 0.2 } }}
      className="form form-control flex flex-col gap-4 w-full max-w-md "
      onSubmit={handleSubmit}
    >
      <div className="form-control max-w-md">
        <input
          required
          type="text"
          name="fullname"
          placeholder="what's your name ?"
          className="input input-sm w-full max-w-md"
        />
        <ValidationError
          prefix="fullname"
          field="fullname"
          className="text-sm text-error"
          errors={state.errors}
        />
      </div>
      <div className="form-control max-w-md">
        <input
          required
          type="text"
          name="email"
          placeholder="what's your email ?"
          className="input input-sm w-full max-w-md"
        />
        <ValidationError
          prefix="email"
          field="email"
          className="text-sm text-error"
          errors={state.errors}
        />
      </div>

      <div className="form-control max-w-md">
        <textarea
          name="message"
          required
          placeholder="what's your message ?"
          className="resize-none textarea h-24  w-full max-w-md"
        />
        <ValidationError
          prefix="message"
          field="message"
          className="text-sm text-error"
          errors={state.errors}
        />
      </div>

      {!state.submitting ? (
        <button
          type="submit"
          className="btn btn-primary btn-sm uppercase rounded-lg"
        >
          Send
        </button>
      ) : (
        <AiOutlineLoading3Quarters
          className=" self-center text-primary animate-spin"
          size={20}
        />
      )}
      {state.succeeded && (
      <small className="text-primary text-center  text-sm">
        Your message has been sent
      </small>
      )}
    </motion.form>
  );
};

export default ContactFrom;
