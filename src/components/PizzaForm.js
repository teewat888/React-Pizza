import React from "react";

const PizzaForm = ({
  topping,
  size,
  vegetarian,
  submitData,
  hTopping,
  hSize,
  hVegetarian,
  id,
}) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    submitData(id);
  };
  const handleTopping = (e) => {
    hTopping(e.target.value);
  };
  const handleSize = (e) => {
    hSize(e.target.value);
  };
  const handleChecked = (e) => {
    if (e.target.value === "Vegetarian") {
      hVegetarian(true);
    } else {
      hVegetarian(false);
    }
  };
  return (
    <div className="form-row">
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Pizza Topping"
          value={topping}
          onChange={handleTopping}
        />
      </div>
      <div className="col">
        <select value={size} className="form-control" onChange={handleSize}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Vegetarian"
            checked={vegetarian ? true : false}
            onChange={handleChecked}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Not Vegetarian"
            checked={vegetarian ? false : true}
            onChange={handleChecked}
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button
          type="submit"
          className="btn btn-success"
          onClick={handleOnClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PizzaForm;
