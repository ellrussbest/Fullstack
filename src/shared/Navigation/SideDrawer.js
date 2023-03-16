import { createPortal } from "react-dom";

import "./SideDrawer.css";

const SideDrawer = ({ children }) => {
  const content = <aside className="side-drawer">{children}</aside>;

  return createPortal(content, document.getElementById('drawer-hook'));

};

export default SideDrawer;

/**
 * React portals - portals in react allows us to render a react component in a different place
 * from the normal place that it would be normally rendered
 * 
 * Portals become more useful when we have to deal with parent's component css when the child
 * component is a modal, popup or a tooltip
 * 
 * So this means that sometimes it can be useful to insert a child in a different location in the dom
 * so that it cannot be affected by the styles/restrictions of its parent component
 * 
 * And even though a portal can be anywhere in the DOM tree, it still behaves like a normal react child
 * this includes event bubbling
 * 
 * event triggered from inside a portal, will propagate to the ancestors in the containing react tree even if
 * those elements are not ancestors in the DOM tree
 */
