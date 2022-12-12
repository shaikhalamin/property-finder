import { MdDashboard, MdLogin, MdManageAccounts } from "react-icons/md";
import { FaRegUser, FaBuilding } from "react-icons/fa";
import SingleListItems from "./SingleListItems";
import { signOut, useSession } from "next-auth/react";
import { Button, Spinner } from "react-bootstrap";

export type SingleItemProps = {
  id: number;
  name: string;
  url: string;
  icon: CallableFunction;
  onClickFn?: CallableFunction;
};

interface SideNavItems {
  [key: string]: SingleItemProps[];
}

export const sideNavItems = (role: string): SideNavItems => {
  const navItems = {
    main: [
      {
        id: 1,
        name: "Dashboard",
        url: "/admin/home",
        icon: (size: number = 21) => <MdDashboard size={size} />,
      },
    ],
    list: [
      {
        id: 3,
        name: "Properties",
        url: "/admin/properties",
        icon: (size: number = 21) => <FaBuilding size={size} />,
      },
    ],

    user: [
      {
        id: 9,
        name: "Profile",
        url: "/admin/users/profile",
        icon: (size: number = 21) => <MdManageAccounts size={size} />,
      },
      {
        id: 10,
        name: "Logout",
        url: "#",
        icon: (size: number = 21) => <MdLogin size={size} />,
        onClickFn: async () => await signOut(),
      },
    ],
  };

  if (role === "admin") {
    navItems["list"].unshift({
      id: 2,
      name: "Users",
      url: "/admin/users",
      icon: (size: number = 21) => <FaRegUser size={size} />,
    });
  }

  return navItems;
};

const SideNavBar = () => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <Button variant="outline-dark" className="mt-3 ml-3 mb-3">
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span style={{ marginLeft: "5px" }}>Loading...</span>
      </Button>
    );
  } else {
    const role = (session as any).role;
    const sideNavData = sideNavItems(role);
    return (
      <div>
        {Object.keys(sideNavData).map((key, index) => {
          const eachItem = sideNavData[key];
          return <SingleListItems key={index} data={eachItem} name={key} />;
        })}
      </div>
    );
  }
};

export default SideNavBar;
