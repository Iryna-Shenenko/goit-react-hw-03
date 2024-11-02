const Searchbox = ({ value, onChange }) => {
  const handleChange = (evt) => {
    onChange(evt.target.value);
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default Searchbox;
