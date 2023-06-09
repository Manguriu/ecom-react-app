import React, { Component } from "react";
import { Link } from "react-router-dom";

class MegaMenu extends Component {
  constructor(props) {
    super();
  }

  MenuClick = (event) => {
    event.target.classList.toggle("active");
    var panel = event.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  render() {
    const PropsData = this.props.data;

    const View = PropsData.map((PropsData, i) => {
      return (
        <div key={i.toString()}>
          <button onClick={this.MenuClick} className="accordion mb-2">
            <img
              src={PropsData.category_image}
              alt=""
              className="accordionMenuIcon"
            />
            &nbsp;{PropsData.category_name}
          </button>

          <div className="panel">
            <ul>
              {PropsData.sub_cat.map((sublist, i) => {
                return (
                  <li>
                    <Link  to={"subcategorylist/"+PropsData.category_name+"/"+sublist.sub_cat} className="accordionItem">
                      {sublist.sub_cat}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    });

    return (
      <div className="accordionmenuDiv mt-3">
        <div className="accordionmenuDivInside">{View}</div>
      </div>
    );
  }
}

export default MegaMenu;
