import React from 'react'
import classes from "./footer.module.css"

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the app </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nesciunt suscipit voluptate commodi unde labore quisquam sunt nemo quam veritatis, non itaque laborum voluptas molestias libero provident sequi nam reiciendis.</p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +216 92 156 030</span>
          <span>Youtube: MedAzizCode</span>
          <span>Github: AzizGuennichi</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Afrique</span>
          <span>Country: Tunisia</span>
          <span>Current Location: Tunisia</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
