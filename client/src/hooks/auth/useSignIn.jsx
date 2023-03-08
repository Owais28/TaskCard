import { useState } from "react";

// useSignIn
export function useSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return [email, setEmail, password, setPassword];
}
