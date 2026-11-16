export const TaskCard = ({ task, children }) => {
  const { title, id, completed, userId } = task;
  return (
    <div className="taskCard">
      <h2>{title}</h2>
      {children}
    </div>
  );
};
