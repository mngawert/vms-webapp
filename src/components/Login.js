import axios from "axios";
import { useEffect, useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLoginClick = (e) => {
    e.preventDefault();
    login();
  };
  const handleGetLoginUserClick = (e) => {
    e.preventDefault();
    getLoginUser();
  };

  const login = async () => {
    const resp = await axios.post("https://localhost:44358/api/User/Login", {
      username,
      password,
    });

    console.log(resp);
  };

  const getLoginUser = async () => {
    try {
      const resp = await axios.get(
        "https://localhost:44358/api/User/GetLoginUser"
      );

      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function GetUser() {
      const users = await axios.get("https://localhost:44358/api/User/GetUser");
      console.log(users);

      setUsers(users.data);
    }
    GetUser();
  }, []);

  return (
    <>
      <form>
        <h1>Login</h1>
        <h3>{username}</h3>
        <label htmlFor="username">username: </label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleUsernameChange}
          value={username}
        ></input>{" "}
        <br />
        <label htmlFor="password">password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        ></input>{" "}
        <br />
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleGetLoginUserClick}>GetLoginUser</button>
        <ul>
          {users.map((a) => (
            <li key={a.userId}>{a.userName}</li>
          ))}
        </ul>
      </form>
    </>
  );
};

export default Login;
