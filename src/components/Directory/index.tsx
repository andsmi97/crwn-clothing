import React, { useState } from "react";
import { data } from "./data";
import MenuItem from "../MenuItem";
import { IMenuItem } from "../../types";
import "./styles.scss";

export default (): JSX.Element => {
  const [selection] = useState<IMenuItem[]>(data);
  return (
    <div className="directory-menu">
      {selection.map(({ id, ...restProps }) => (
        <MenuItem key={id} id={id} {...restProps} />
      ))}
    </div>
  );
};
