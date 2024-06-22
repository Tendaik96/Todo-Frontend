import Header from "./Components/Header/Header";
import Input from "./Components/Input/Input";
import TodoHeadings from "./Components/TodoHeadings/TodoHeadings";
import TodoItem from "./Components/TodoItem/TodoItem";
import { InputProvider } from "./Context/InputContext";

export default function Home() {
  return (
    <main className="border-box bg-zinc-800 h-full w-full text-white">
      <InputProvider>
      <Header />
      <Input />
      <TodoHeadings/>
      <TodoItem />
      </InputProvider>
    </main>
  );
}
