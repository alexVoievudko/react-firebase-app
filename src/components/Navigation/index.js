import React from "react";
import { Link } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";

import * as ROUTES from "../../constants/routes";

const Navigation = () => {
  return (
    <Menu fixed="top" inverted>
      <Menu.Item as={Link} to={ROUTES.LANDING}>
        <Image
          size="mini"
          src="https://avatars0.githubusercontent.com/u/1335026?s=400&v=4"
        />
      </Menu.Item>
      <Menu.Item as={Link} to={ROUTES.LANDING}>
        Landing
      </Menu.Item>
      <Menu.Item as={Link} to={ROUTES.HOME}>
        Home
      </Menu.Item>
      <Menu.Item as={Link} to={ROUTES.ACCOUNT}>
        Account
      </Menu.Item>
      <Menu.Item as={Link} to={ROUTES.ADMIN}>
        Admin
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item as={Link} to={ROUTES.SIGN_IN}>
          Sign In
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Navigation;
