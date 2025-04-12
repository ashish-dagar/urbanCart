import React from "react";
import * as styles from "./login.module.scss";
import Card from "../../component/card";
import Input from "../../component/input";
import Select from "../../component/select";


const Login = () => {
  console.log(styles);
  const handleClick = () => {
    console.log("clicked");
  }
  return (
    <div className={styles.title}>
      <Input label="Username" placeholder="Enter username" value={""} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          } } />
      <div className={styles.cardWrapper}>
        <Card content="hi content" className={styles.customCard}>
          <Input label="Username" placeholder="Enter username" value={""} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          } } />
        </Card>
      </div>
    </div>
  )
}
export default Login;
