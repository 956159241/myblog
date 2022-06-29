interface MenuNode {
  id: string;
  parentId: string;
  children: Array<MenuNode> | undefined;
  systemId: string;
  menuName: string;
  menuType: number;
  permsionCode: string;
  sortNo: number;
  url: string;
  icon: string;
}

export { MenuNode };
