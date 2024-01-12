function MyButton() {
  return (
    <button>I'm a button!</button>
  );
}

export default function Home() {
  return (
    <div>
      <main><h1>Hello, Home page!</h1></main>
      <MyButton />
    </div>
  );
}