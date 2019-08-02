import React from "react";
import MenuItem from "../MenuItem";
import "./styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSections } from "../../redux/directory/selectors";

const Directory = ({ sections }: any): JSX.Element => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...restProps }: any) => (
        <MenuItem key={id} id={id} {...restProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

export default connect(mapStateToProps)(Directory);
