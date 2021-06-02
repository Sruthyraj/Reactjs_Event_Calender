import "./list.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function List() {
  const params = useParams();
  console.log(params.currentDay);
  let [itemName, setitemName] = useState("");
  let [items, setItems] = useState([]);

  let lskey = params.currentDay;

  console.log(lskey);
  let display = lskey.slice(0, 16);
  console.log(display);

  useEffect(() => {
    let localitem = localStorage.getItem(lskey);
    if (localitem) {
      localitem = localitem.split(",");
      setItems([...localitem]);
      console.log(localitem);
    } else {
      setItems([]);
    }

    console.log(items);
  }, []);

  const handleSumbit = () => {
    setItems([...items, itemName]);
    console.log(items);
    setitemName("");
    let localitem = localStorage.getItem(lskey);

    localitem = localitem ? localitem.split(",") : [];

    localitem.push(itemName);

    localStorage.setItem(lskey, localitem);
  };

  const handleUpdate = (val) => {
    let updatedval = prompt("Update your Event here!!!");
    let localitem = localStorage.getItem(lskey);
    console.log(localitem);
    localitem = localitem.split(",");
    console.log(localitem);
    if (localitem.includes(val)) {
      localitem.splice(localitem.indexOf(val), 1);
    }
    localitem.push(updatedval);

    localStorage.setItem(lskey, localitem);
    setItems([...localitem]);
  };

  const handleDelete = (val) => {
    // alert(val)

    let localitem = localStorage.getItem(lskey);
    console.log(localitem);
    localitem = localitem.split(",");
    console.log(localitem);
    if (localitem.includes(val)) {
      localitem.splice(localitem.indexOf(val), 1);
    }

    localStorage.setItem(lskey, localitem);
    setItems([...localitem]);
  };

  return (
    <div className="listMain">
      <h3> Date </h3>

      <h4>{display}</h4>
      <hr />

      <ul>
        {items.map((item) => (
          <li className="list-item">
            <h6>{item}</h6>
            <div className="btton">
              <button
                id="edit"
                type="button"
                class="btn btn-warning"
                onClick={() => handleUpdate(item)}
              >
                Edit
              </button>
              <button
                id="edit"
                type="button"
                class="btn btn-danger"
                onClick={() => handleDelete(item)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div class="mb-3">
        <input
          value={itemName}
          type="text"
          class="form-control"
          id="eventText"
          onChange={(e) => setitemName(e.target.value)}
        />
      </div>

      <div class="btn-group" role="group">
        <button
          type="button"
          onClick={handleSumbit}
          class="btn btn-outline-primary"
        >
          Add Item
        </button>
      </div>
    </div>
  );
}

export default List;
