// eslint-disable-next-line react/prop-types, no-unused-vars
const Login = ({ login }) => {
  return (
    <form>
      <label htmlFor="username">Felhasználónév: </label>
      <input type="text" id="username" name="username" value="" label="Felhasználónév" />
      <br />
      <label htmlFor="password">Jelszó: </label>
      <input type="password" id="password" name="password" value="" label="Jelszó" />
      <br />
      <button type="submit"> Elküld</button>
    </form>
  );
};

export default Login;
