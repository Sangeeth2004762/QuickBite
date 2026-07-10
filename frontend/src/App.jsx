import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ServiceForm from "./components/ServiceForm";
import ServiceList from "./components/ServiceList";
import "./App.css";
export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("quickbite-tasks");
    if (saved) { try { return JSON.parse(saved); } catch (e) { return []; } }
    return [
      { id: 1, title: "Prepare Biryani Order",   category: "Cooking",  priority: "High",   done: false },
      { id: 2, title: "Assign delivery partner", category: "Delivery", priority: "Medium", done: false },
      { id: 3, title: "Update menu pricing",      category: "Admin",    priority: "Low",    done: true  },
    ];
  });
  useEffect(() => {
    localStorage.setItem("quickbite-tasks", JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    const pending = tasks.filter((t) => !t.done).length;
    document.title = pending > 0 ? `QuickBite (${pending} pending)` : "QuickBite | Task Manager";
  }, [tasks]);
  const addTask    = (task) => setTasks((prev) => [...prev, { ...task, id: Date.now(), done: false }]);
  const deleteTask = (id)   => setTasks((prev) => prev.filter((t) => t.id !== id));
  const toggleDone = (id)   => setTasks((prev) => prev.map((t) => t.id === id ? { ...t, done: !t.done } : t));
  return (
    <div className="app">
      <Navbar />
      <main className="tm-main">
        <ServiceForm onAdd={addTask} />
        <ServiceList tasks={tasks} onDelete={deleteTask} onToggle={toggleDone} />
      </main>
    </div>
  );
}