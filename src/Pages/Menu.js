import React from 'react';
import Sidebar from "../components/Menu/SideBar";
import DropdownMenu from "../components/Menu/DropDownMenu";
import FriendGroups from '../components/Menu/Groups';

const MenuPage = () => {
  return (
    <>
  <DropdownMenu/>
  <Sidebar/>
  <FriendGroups/>
  </>
  );
};

export default MenuPage;

