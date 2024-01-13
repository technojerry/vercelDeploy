import { Fragment } from "react";

import MainNavigation from "./MainNavigation";

function Layout(props: { children: any }) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
