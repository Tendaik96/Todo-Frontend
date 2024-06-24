import DeleteAll from "./Components/DeleteAll/DeleteAll";
import DisplayInputs from "./Components/DisplayInputs/DisplayInputs";
import EditInput from "./Components/DisplayInputs/EditInput/EditInput";
import Header from "./Components/Header/Header";
import Input from "./Components/DisplayInputs/Input/Input";
import TodoItem from "./Components/TodoItem/TodoItem";
import { EditDisplayProvider } from "./Context/DisplayInputContext";
import { EditInputProvider } from "./Context/EditInputContext";
import { InputProvider } from "./Context/InputContext";
import Account from "./Components/Account/Account";

export default function Home() {
  return (
    <main className="border-box bg-zinc-800 min-h-screen max-h-full w-full text-white">
      <EditDisplayProvider>
        <EditInputProvider>
          <InputProvider>
            <Header />
            <DisplayInputs />
            <TodoItem />
            <DeleteAll />
          </InputProvider>
        </EditInputProvider>
      </EditDisplayProvider>
      {/* <Account/> */}
    </main>
  );
}
