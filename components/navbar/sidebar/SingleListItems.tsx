import React from "react";
import { Nav } from "react-bootstrap";
import { SingleItemProps } from "./SideNavBar";

type SingleListProps = {
  data: SingleItemProps[];
  name: string;
};

const SingleListItems: React.FC<SingleListProps> = ({ data, name }) => {
  return (
    <div>
      <div className="px-3 ft-14 mt-4 text-secondary">{name.toUpperCase()}</div>
      <Nav className="flex-column px-4">
        {data.map((item) => (
          <Nav.Link href={item.url} key={item.id}>
            <span style={{ marginRight: "5px" }}>{item.icon()}</span>
            <span className="text-dark ft-14">{item.name}</span>
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
};

export default SingleListItems;
