import { UserProvider } from "./components/GetUserProvider";
import ShowUserData from "./components/ShowUserData";
import UserInput from "./components/UserInput";
import './App.css'

function App() {


  return (
    <>
      <UserProvider>
          <div>
            <h1>Buscador de usuarios de GIT</h1>
            <UserInput />
            <ShowUserData />
          </div>
      </UserProvider>
    </>
  );
}

export default App;
