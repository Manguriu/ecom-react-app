import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./route/AppRoute";
import { Helmet } from "react-helmet";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
        <div>
          <Helmet>
            <script>
              {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/64a1835f94cf5d49dc610f69/1h4beibho';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })()`}
            </script>
          </Helmet>
        </div>
      </Fragment>
    );
  }
}

export default App;
