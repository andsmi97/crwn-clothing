import React, { useState } from "react";
import { data } from "./data";
import MenuItem from "../MenuItem";
import "./styles.scss";

export default () => {
  const [selection, setSelection] = useState(data);
  return (
    <div className="directory-menu">
      {selection.map(({ title, id, imageUrl, linkUrl, size }) => (
        <MenuItem
          title={title}
          key={id}
          img={imageUrl}
          link={linkUrl}
          size={size}
        />
      ))}
    </div>
  );
};
