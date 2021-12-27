const Movies = () => {
  const create = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <button onClick={create}>Create List</button>
    </div>
  );
};
export default Movies;
