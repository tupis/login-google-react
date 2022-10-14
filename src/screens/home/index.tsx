const Home = (props: any) => {
  const { name, email } = props;

  return (
    <>
      <h1>Ola Seja Bem Vindo!, {name}</h1>
      <p>Email: {email}</p>
      <button onClick={() => console.log("")}>Mudar email</button>
    </>
  );
};

export default Home;
