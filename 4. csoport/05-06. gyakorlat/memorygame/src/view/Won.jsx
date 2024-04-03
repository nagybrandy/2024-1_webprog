const Won = () => {
  const reset = console.log;

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "#fff" }}>Nyertél!</h1>
      <button onClick={reset}>Új játék</button>
    </div>
  );
};

export default Won;
