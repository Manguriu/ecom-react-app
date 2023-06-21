import React, { Component } from "react";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { Link } from "react-router-dom";

export class AllMenu extends Component {
  constructor(props) {
    super();
    this.state = {
      Menudata: [],
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.AllCategory)
      .then((response) => {
        this.setState({ Menudata: response.data });
      })
      .catch((error) => {});
  }

  MenuClick = (event) => {
    event.target.classList.toggle("active");
    var panelAll = event.target.nextElementSibling;
    if (panelAll.style.maxHeight) {
      panelAll.style.maxHeight = null;
    } else {
      panelAll.style.maxHeight = panelAll.scrollHeight + "px";
    }
  };

  render() {
    const PropsData = this.state.Menudata;

    const View = PropsData.map((PropsData, i) => {
      return (
        <div key={i.toString()}>
          <button onClick={this.MenuClick} className="accordionAll mb-2">
            <img
              src={PropsData.category_image}
              alt=""
              className="accordionMenuIconAll"
            />
            &nbsp;{PropsData.category_name}
          </button>

          <div className="panelAll">
            <ul>
              {PropsData.sub_cat.map((sublist, i) => {
                return (
                  <li>
                     <Link   to={"subcategorylist/"+PropsData.category_name+"/"+sublist.sub_cat} className="accordionItem text-link">
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
      <div className="accordionmenuDivAll">
        <div className="accordionmenuDivInsideAll">{View}</div>
      </div>
    );
  }
}

export default AllMenu;
