import React from "react";
import * as styles from "./login.module.scss";
import Card from "../../commonComponent/card";
import Input from "../../commonComponent/input";
import Select from "../../commonComponent/select";
import Button from "../../commonComponent/Button";


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
          <Input
            label="Username"
            placeholder="Enter username"
            value={""} onChange={()=>{}}
            />
          <Input
           label="Password"
           placeholder="Enter password"
           value={""}
           onChange={()=>{}}
           />
           <Button onClick={handleClick}>Login</Button>
        </Card>
      </div>
    </div>
  )
}
export default Login;
