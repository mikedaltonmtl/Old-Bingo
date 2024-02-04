import Task from "./Task";

const taskArray = [];
for (let i = 1; i < 17; i++) {
  taskArray.push(i);
}

export default function Card() {
  return (
    <section className="grid grid-cols-4 gap-4 h-5/6">
      {taskArray.map((task, index) => (
        <Task
          key={index}
          content={task}
          type="todo"
        />
      ))}
    </section>
  );
}
