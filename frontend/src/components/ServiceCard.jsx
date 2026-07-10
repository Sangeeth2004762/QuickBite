const PRIORITY_COLORS = { High: "#ef4444", Medium: "#f97316", Low: "#22c55e" };
const CATEGORY_ICONS  = { Cooking: "👨‍🍳", Delivery: "🚴", Admin: "📊", Support: "🎧", Inventory: "📦" };
export default function ServiceCard({ task, index, onDelete, onToggle }) {
  return (
    <div
      className={`service-card ${task.done ? "card-done" : ""}`}
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <button
        className={`card-check ${task.done ? "checked" : ""}`}
        onClick={() => onToggle(task.id)}
      >
        {task.done ? "✓" : ""}
      </button>
      <div className="card-body">
        <p className="card-title">{task.title}</p>
        <div className="card-meta">
          <span className="card-category">{CATEGORY_ICONS[task.category] || "📌"} {task.category}</span>
          <span className="card-priority" style={{ color: PRIORITY_COLORS[task.priority] }}>● {task.priority}</span>
        </div>
      </div>
      <button className="card-delete" onClick={() => onDelete(task.id)}>🗑️</button>
    </div>
  );
}