import React from 'react'

function PageNotFound() {
    const styles = {
        gridArea: "main",
        minHeight: "300px",
        width: "100%",
        flexDirection: "column"
    }
      return (
          <div style={styles} className='d-flex aligni-c justc-c txt-c'>
              <h1>Page Not Found</h1> <br />
              <h1>Error 404</h1>
          </div>
      )
  }


export default PageNotFound;