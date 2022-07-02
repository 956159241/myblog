interface MenuNode {
  id: string;
  parentId: string;
  children?: Array<MenuNode>;
  menuName: string;
  menuType: number;
  sortNo: number;
  icon: string;
}

export { MenuNode };
