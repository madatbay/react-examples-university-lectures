import { useState } from "react";

const FORM_INITIALS = { name: "", description: "", category: "" };

const MovieAddForm = ({ movies, setMovies }) => {
  const [formValues, setFormValues] = useState(FORM_INITIALS);
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.entries(formValues).forEach(([key, value]) => {
      newErrors[key] = value ? "" : "Field is required.";
    });
    setErrors(newErrors);

    if (Object.values(newErrors).some((msg) => msg.trim() !== "")) {
      return;
    }
    setMovies([...movies, { id: Math.random(), ratings: [], ...formValues }]);
    setFormValues(FORM_INITIALS);
  };

  return (
    <div className="add-form">
      <h2 className="title">Add new movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} />
          <p className="error">{errors.name}</p>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" value={formValues.description} onChange={handleChange} />
          <p className="error">{errors.description}</p>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select value={formValues.category} name="category" onChange={handleChange}>
            <option value="">------</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
          </select>
          <p className="error">{errors.category}</p>
        </div>
        <button className="button" type="submit">
          + Add movie
        </button>
      </form>
    </div>
  );
};
export default MovieAddForm;
