import { React } from "react";

function List() {
  return (
    <div>
      <h2 className="headings">Start editing to see some magic happen!</h2>
      <img className="images" src="https://picsum.photos/200?b" alt="" />
      <img
        className="images"
        src="https://picsum.photos/200?grayscale"
        alt=""
      />
      <img className="images" src="https://picsum.photos/200?g" alt="" />
    </div>
  );
}

export default List;
