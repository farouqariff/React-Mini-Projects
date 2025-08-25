const ChangeName = (setUsername) => {
  const handlePropChange = () => {
    setUsername("there");
  };
  return (
    <>
      <button onClick={handlePropChange}>Hide My Name</button>
    </>
  );
};

export default ChangeName;
