import React from "react";
const Movies = () => {
  const [arr, addArray] = React.useState([]);

  const Add = () => {
    console.log("Clicked");
    addArray((list) => [
      ...list,
      { title: `List ${list.length + 1}`, id: list.length + 1 },
    ]);
    console.log(arr);
  };

  return (
    <div>
      <button onClick={Add}>Create List</button>
      {arr.map((data) => (
        <div key={data.id}>
          <h2>{data.title}</h2>
          <table></table>
        </div>
      ))}
    </div>
  );
};

const MovieList = (props) => {};
export default Movies;
