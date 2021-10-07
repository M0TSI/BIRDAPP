import React from 'react';
import Header from '../components/Header';
function NotFound() {
  return(
   <React.Fragment>
    <Header/>
    <div className="notFoundInfo">
      <h1>404: Not Found</h1>
      <h5>Page not found, sorryyyy</h5>
    </div>
   </React.Fragment>
   );
}

export default NotFound;
