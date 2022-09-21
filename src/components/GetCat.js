import { useEffect, useState } from "react";
import { fetchCatById } from "../utils/api.js";

const GetCat = () => {
  const [cat, setCat] = useState(null);
  const [id, setId] = useState("");
  const [id1, setId1] = useState(null);
  const [id2, setId2] = useState(null);
  const [id3, setId3] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setId(`${id1}${id2}${id3}`);
  };

  useEffect(() => {
    fetchCatById(id).then((res) => {
      setCat(res);
    });
  }, [id]);

  return (
    <div>
      <div className="container">
        <h1>😺RANDOCAT😺</h1>
        <text>
          Please type a character into these boxes to get a cute looking kitty!
        </text>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={id1}
              maxLength={1}
              placeholder="Letter 1"
              onChange={(event) => {
                setId1(event.target.value);
              }}
            />
            <input
              type="text"
              value={id2}
              maxLength={1}
              placeholder="Letter 2"
              onChange={(event) => {
                setId2(event.target.value);
              }}
            />
            <input
              type="text"
              value={id3}
              maxLength={1}
              placeholder="Letter 3"
              onChange={(event) => {
                setId3(event.target.value);
              }}
            />
            <button type="Submit">Submit</button>
          </form>
        </div>
      </div>
      <div>
        {cat ? (
          <div className="cat-image-container">
            <img className="cat-image" src={cat.data.url} alt={cat.data.id} />
          </div>
        ) : (
          <text className="error-404">
            Oh No... This cat doesn't exist yet!
          </text>
        )}
      </div>
    </div>
  );
};

export default GetCat;
