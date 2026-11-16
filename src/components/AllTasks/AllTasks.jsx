import { useGetTasks } from "../../hooks/useGetTasks";
import { useSelectedStore } from "../../store/useSelectedStore";
import { TaskCard } from "../TaskCard/TaskCard";
export const AllTasks = () => {
  const { data: tasks, isLoading, error } = useGetTasks();
  const selectedTasks = useSelectedStore((state) => state.selectedTasks);
  const addTask = useSelectedStore((state) => state.addTask);
  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }
  return (
    <div className="allTasks">
      <h2 className="allTasks_title">Список всех задач</h2>
      {tasks?.map((item) => (
        <TaskCard task={item} key={item.id}>
          <button
            disabled={
              !selectedTasks.some((selected) => selected.id === item.id)
                ? false
                : true
            }
            onClick={() => addTask(item)}
          >
            {!selectedTasks.some((selected) => selected.id === item.id)
              ? "Взять в работу"
              : "Уже выбрано"}
          </button>
        </TaskCard>
      ))}
    </div>
  );
};
