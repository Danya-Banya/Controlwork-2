import "./App.css";
import { AllTasks } from "./components/AllTasks/AllTasks";
import { SelectedTasks } from "./components/SelectedTasks/SelectedTasks";

function App() {
  return (
    <section className="tasksContainer">
      <SelectedTasks />
      <AllTasks />
    </section>
  );
}

export default App;
