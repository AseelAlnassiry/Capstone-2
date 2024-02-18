import { CheckIcon, EnvelopeIcon, KeyIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";

import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = () => {
  };

  return (
    <div className="h-screen w-screen">
      <form
        className="flex h-full w-full flex-col items-center justify-center gap-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-semibold">Let's get you registered!</h1>
        <label className="input input-bordered flex items-center gap-2">
          <EnvelopeIcon className="w-4" />
          <input
            type="text"
            className="grow"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <KeyIcon className="w-4" />
          <input
            type="password"
            className="grow"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <CheckIcon className="w-4" />
          <input
            type="password"
            className="grow"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => {
              setConfirm(e.target.value);
            }}
          />
        </label>
        <div className="flex items-center justify-between gap-10">
          <FaApple size={35} />
          <FaGoogle size={30} />
          <FaFacebook size={30} />
        </div>
        <button className="btn btn-primary ">Register</button>
      </form>
    </div>
  );
};
export default Register;
