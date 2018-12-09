import React from "react";
import { renderRowAtIndex, rowHeight } from "./utils";
import List from "./List";

const Windowing = () => (
  <React.Fragment>
    <div
      style={{
        display: "block",
        position: "fixed",
        width: "100%"
      }}
    >
      <input
        className="form-control"
        placeholder="type to search..."
        style={{ maxWidth: "500px", background: "#eee", margin: "0 auto" }}
      />
    </div>
    <List
      numRows={500000}
      rowHeight={rowHeight}
      renderRowAtIndex={renderRowAtIndex}
    />
  </React.Fragment>
);

export default Windowing;
