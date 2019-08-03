import React from "react";
import MenuItem from "../MenuItem";
import { DirectoryMenu } from "./styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSections } from "../../redux/directory/selectors";

const Directory = ({ sections }: any): JSX.Element => {
  return (
    <DirectoryMenu>
      {sections.map(({ id, ...restProps }: any) => (
        <MenuItem key={id} id={id} {...restProps} />
      ))}
    </DirectoryMenu>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

export default connect(mapStateToProps)(Directory);
