
/*eslint-disable*/
import React, { Component } from "react";


class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show-dropdown open",
      bg_checked: true,
      bgImage: this.props.bgImage
    };
  }
  handleClick = () => {
    this.props.handleFixedClick();
  };
  onChangeClick = () => {
    this.props.handleHasImage(!this.state.bg_checked);
    this.setState({ bg_checked: !this.state.bg_checked });
  };
  render() {
    return (
      <div className="fixed-plugin">
        <div id="fixedPluginClasses" className={this.props.fixedClasses}>
          <div onClick={this.handleClick}>
            <i className="fa fa-cog fa-2x" />
          </div>
          <ul className="dropdown-menu">
          </ul>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
