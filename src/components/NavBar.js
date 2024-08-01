import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let link=links.map((linkOf)=>{
    return <a key={linkOf} href={ `#${linkOf}`}  >{linkOf}</a>
  })
  return <nav>{link}</nav>;
}

export default NavBar;
