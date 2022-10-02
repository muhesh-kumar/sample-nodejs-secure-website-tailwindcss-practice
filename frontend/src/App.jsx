import Btn from './components/Btn';

const App = () => {
  return (
    <div className="h-screen bg-zinc-600 text-white font-roboto flex flex-col place-content-center items-center gap-2">
      <h1 className="text-3xl">
        Sample secure NodeJS application to demonstrate vulnerabilities
      </h1>
      <div className="flex gap-3">
        <Btn btnTextContent="Signup" redirectURL="/signup" />
        <Btn btnTextContent="Login" redirectURL="/login" />
      </div>
    </div>
  );
};

export default App;
