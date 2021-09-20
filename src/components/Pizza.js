import React from "react";

const Pizza = ({ topping, size, vegetarian, fillEditForm, pizza }) => {
  const handleOnClick = () => {
    fillEditForm(pizza);
  };
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleOnClick}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
};

export default Pizza;
