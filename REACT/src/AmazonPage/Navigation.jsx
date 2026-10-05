/*
 top navigation of the page

*/
/*
import <name> from "<relative path>"
ensure before import its in the src directory
*/
import logo from "./assets/logo.png";

/* component naming rules.*/
/*null or valid jsx*/
function Navigation() {
  return (
    <div className="nav">
      <img src={logo} width="60px" />
      <input placeholder="Search" />
    </div>
  );
}

/*
 export so that any othe file can
 import the component.
 1.Default Export:<one major>
*/
export default Navigation;
