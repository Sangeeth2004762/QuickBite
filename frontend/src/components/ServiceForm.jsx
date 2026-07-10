import { useState } from "react";
const CATEGORIES = ["Cooking", "Delivery", "Admin", "Support", "Inventory"];
const PRIORITIES  = ["High", "Medium", "Low"];
export default function ServiceForm({ onAdd }) {
  const [title,    setTitle]    = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [errors,   setErrors]   = useState({});
  const [shake,    setShake]    = useState(false);
  const validate = () => {
    const e = {};
    if (!title.trim())            e.title    = "Task title is required.";
    else if (title.trim().length < 3) e.title = "Minimum 3 characters.";
    if (!category)                e.category = "Select a category.";
    if (!priority)                e.priority = "Select a priority.";
    return e;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    onAdd({ title: title.trim(), category, priority });
    setTitle(""); setCategory(""); setPriority(""); setErrors({});
  };
  return (
    <div className={`service-form-wrap ${shake ? "shake" : ""}`}>
      <h2 className="form-heading">➕ Add New Task</h2>
      <form className="service-form" onSubmit={handleSubmit} noValidate>
        <div className="field-group">
          <label>Task Title *</label>
          <input
            type="text"
            placeholder="e.g. Prepare Chicken Biryani order #204"
            value={title}
            onChange={(e) => { setTitle(e.target.value); setErrors((p) => ({ ...p, title: "" })); }}
            className={errors.title ? "field-error" : ""}
          />
          {errors.title && <span className="err-msg">{errors.title}</span>}
        </div>
        <div className="field-row">
          <div className="field-group">
            <label>Category *</label>
            <select value={category}
              onChange={(e) => { setCategory(e.target.value); setErrors((p) => ({ ...p, category: "" })); }}
              className={errors.category ? "field-error" : ""}
            >
              <option value="">-- Select --</option>
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            {errors.category && <span className="err-msg">{errors.category}</span>}
          </div>
          <div className="field-group">
            <label>Priority *</label>
            <select value={priority}
              onChange={(e) => { setPriority(e.target.value); setErrors((p) => ({ ...p, priority: "" })); }}
              className={errors.priority ? "field-error" : ""}
            >
              <option value="">-- Select --</option>
              {PRIORITIES.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
            {errors.priority && <span className="err-msg">{errors.priority}</span>}
          </div>
        </div>
        <button type="submit" className="submit-btn">Add Task</button>
      </form>
    </div>
  );
}