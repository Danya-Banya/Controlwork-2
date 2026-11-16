import { useSelectedStore } from "../../store/useSelectedStore";
import { TaskCard } from "../TaskCard/TaskCard";
export const SelectedTasks = () => {
  const selectedTasks = useSelectedStore((state) => state.selectedTasks);
  const clearAll = useSelectedStore((state) => state.clearAll);
  const removeTask = useSelectedStore((state) => state.removeTask);
  return (
    <>
      <aside className="selectedTasks">
        <h2>
          Выбранные задачи{" "}
          {selectedTasks.length > 0 ? `(${selectedTasks.length})` : ""}
        </h2>
        <button onClick={() => clearAll()} disabled={selectedTasks.length === 0 ? true : false}>Очистить всё</button>
        {selectedTasks?.map((task) => (
          <TaskCard task={task} key={task.id}>
            <button onClick={() => removeTask(task)}>Отказаться</button>
          </TaskCard>
        ))}
      </aside>
    </>
  );
};
