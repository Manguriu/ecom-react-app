import { Fragment, Component } from "react";

import AppURL from "../../api/AppURL";
import axios from "axios";

export class Reviews extends Component {
  constructor() {
    super();
    this.state = {
      reviewData: [],
    };
  }

  componentDidMount() {
    let Product_id = this.props.Product_id;

    axios
      .get(AppURL.Review(Product_id))
      .then((response) => {
        this.setState({
          reviewData: response.data,
        });
      })
      .catch((error) => {});
  }

  render() {
    const List = this.state.reviewData;
    if (List.length > 0) {
      const NewView = List.map((ReviewList, i) => {
        if (ReviewList.rev_rating === "1") {
          return (
            <div>
              <p className=" p-0 m-0">
                <span className="Review-Title">{ReviewList.rev_name}</span>{" "}
                <span className="text-success">
                  <i className="fa fa-star"></i>{" "}
                </span>{" "}
              </p>
              <p>{ReviewList.rev_comment}</p>
            </div>
          );
        } else if (ReviewList.rev_rating === "2") {
          return (
            <div>
              <p className=" p-0 m-0">
                <span className="Review-Title">{ReviewList.rev_name}</span>{" "}
                <span className="text-success">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </span>{" "}
              </p>
              <p>{ReviewList.rev_comment}</p>
            </div>
          );
        } else if (ReviewList.rev_rating === "3") {
          return (
            <div>
              <p className=" p-0 m-0">
                <span className="Review-Title">{ReviewList.rev_name}</span>{" "}
                <span className="text-success">
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i>
                </span>{" "}
              </p>
              <p>{ReviewList.rev_comment}</p>
            </div>
          );
        } else if (ReviewList.rev_rating === "4") {
          return (
            <div>
              <p className=" p-0 m-0">
                <span className="Review-Title">{ReviewList.rev_name}</span>{" "}
                <span className="text-success">
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                </span>{" "}
              </p>
              <p>{ReviewList.rev_comment}</p>
            </div>
          );
        } else if (ReviewList.rev_rating === "5") {
          return (
            <div>
              <p className=" p-0 m-0">
                <span className="Review-Title">{ReviewList.rev_name}</span>{" "}
                <span className="text-success">
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>{" "}
                </span>{" "}
              </p>
              <p>{ReviewList.rev_comment}</p>
            </div>
          );
        }
        //end else if
        return (
          <Fragment>
            <h6 className="mt-2">REVIEWS</h6>
            {NewView}
          </Fragment>
        );
      });
    } else {
      return (
        <div>
          <h6 className="mt-2">REVIEWS</h6>
          <p>No reviews yet.</p>
        </div>
      );
    }
  }
}

export default Reviews;
