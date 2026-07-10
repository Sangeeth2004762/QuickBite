import { useState } from "react";
import ServiceCard from "./ServiceCard";
export default function ServiceList({ tasks, onDelete, onToggle }) {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Pending", "Completed"];
  const total     = tasks.length;
  const completed = tasks.filter((t) => t.done).length;
  const pending   = total - completed;
  const filtered = tasks.filter((t) => {
    if (filter === "Pending")   return !t.done;
    if (filter === "Completed") return t.done;
    return true;
  });
  return (
    <div className="service-list-wrap">
      <div className="stats-row">
        <div className="stat-box">
          <span className="stat-num">{total}</span>
          <span className="stat-lbl">Total</span>
        </div>
        <div className="stat-box stat-orange">
          <span className="stat-num">{pending}</span>
          <span className="stat-lbl">Pending</span>
        </div>
        <div className="stat-box stat-green">
          <span className="stat-num">{completed}</span>
          <span className="stat-lbl">Completed</span>
        </div>
      </div>
      <div className="filter-row">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-tab ${filter === f ? "tab-active" : ""}`}
            onClick={() => setFilter(f)}
          >{f}</button>
        ))}
      </div>
      <h2 className="list-heading">📋 Task List</h2>
      {filtered.length === 0 ? (
        <div className="empty-box">
          <span>🍽️</span>
          <p>No tasks here. Add one above!</p>
        </div>
      ) : (
        <div className="cards-wrap">
          {filtered.map((task, index) => (
            <ServiceCard
              key={task.id}
              task={task}
              index={index}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}