import * as React from "react";

const Dropdown = () => {
  return (
    <div>
      {/* <label>
        What do we eat?
        <select>
      <li><option >Fruit</option></li>

          <option>Vegetable</option>

          <option>Meat</option>
        </select>
      </label> */}

      <li>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Donations
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Televangelism
            </a>
            <a class="dropdown-item" href="#">
              Jesus Cares Mission
            </a>
            <a class="dropdown-item" href="#">
              Upon Mount Zion Foundation
            </a>
            <a class="dropdown-item" href="#">
              Church building Project
            </a>
            <a class="dropdown-item" href="#">
              Evangelism /Crusade
            </a>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Dropdown;
