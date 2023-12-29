"use client";
import styles from "./page.module.css";
import axios from "axios";

export default function Home() {
  const read = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/users`);

      if (response.status === 200) {
        console.log(response.data.data);
        return response.data.message;
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const write = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/users`, {
        data: {
          name: "Danny",
        },
      });

      if (response.status === 200) {
        console.log("post", response.data.data);
        return response.data.message;
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <main className={styles.main}>
      <button onClick={read}>Hier klicken zum lesen</button>
      <button onClick={write}>Hier klicken zum schreiben</button>
    </main>
  );
}
