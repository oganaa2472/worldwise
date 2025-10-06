import { useNavigate } from "react-router-dom";
import PageNav from "../components/PageNav";

import styles from "./Login.module.css";
import { useEffect, useState } from "react";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState<string>("olga@example.com");
  const [password, setPassword] = useState<string>("qwerty");

  
  const navigate = useNavigate();

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} >
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
          
            value={email}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
           
            value={password}
            required
          />
        </div>

        <div>
          {/* <Button type="primary">Login</Button> */}
        </div>
      </form>
    </main>
  );
}
