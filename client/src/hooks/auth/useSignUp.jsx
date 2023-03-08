import { useState } from "react";

// useSignUp
export function useSignUp() {
  const [state, setState] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
  });

  return [state, setState];
}
