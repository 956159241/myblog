import { MenuNode } from './types';

// 由于菜单数据并非一颗树，而是多棵树组成的数据，顾当成由树组成的数组的处理
const convertMenuArrToTree = (array: Array<MenuNode>) => {
  const rootMenus = array.filter((x) => x.parentId === '0');
  const childrenMenus = array.filter((x) => x.parentId !== '0');
  for (let i = 0; i < rootMenus.length; i++) {
    if (childrenMenus.find((x) => x.parentId === rootMenus[i].id)) {
      rootMenus[i].children = getRootMenuChild(rootMenus[i].id, childrenMenus);
    } else {
      rootMenus[i].children = [];
    }
  }
  return rootMenus;
};

const getRootMenuChild = (
  id: string,
  childrenMenus: Array<MenuNode>
): Array<MenuNode> => {
  const menus = childrenMenus.filter((x) => x.parentId === id);
  for (let i = 0; i < menus.length; i++) {
    if (childrenMenus.find((x) => x.parentId === menus[i].id)) {
      menus[i].children = getRootMenuChild(menus[i].id, childrenMenus);
    } else {
      menus[i].children = [];
    }
  }
  return menus;
};

export { convertMenuArrToTree };
