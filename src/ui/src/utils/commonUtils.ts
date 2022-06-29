import { popErrorMessage, popSuccessMessage } from '@/components/hs-message';
import Clipboard from 'clipboard';
import { MenuNode } from '@/model/menuNode';
export default class CommonUtils {
  static copy = (className: string, successInfo: string, errorInfo: string) => {
    const newClassName = className?.replaceAll(' ', '.')?.replaceAll(' ', '');
    const clipboard = new Clipboard(`.${newClassName}`);
    clipboard.on('success', () => {
      popSuccessMessage(successInfo);
      // 释放内存
      clipboard.destroy();
    });
    clipboard.on('error', () => {
      // 不支持复制
      popErrorMessage(errorInfo);
      // 释放内存
      clipboard.destroy();
    });
  };

  // 由于菜单数据并非一颗树，而是多棵树组成的数据，顾当成由树组成的数组的处理
  static convertMenuArrToTree = (array: Array<MenuNode>) => {
    const rootMenus = array.filter((x) => x.parentId === '0');
    const childrenMenus = array.filter((x) => x.parentId !== '0');
    for (let i = 0; i < rootMenus.length; i++) {
      if (childrenMenus.find((x) => x.parentId === rootMenus[i].id)) {
        rootMenus[i].children = this.getRootMenuChild(
          rootMenus[i].id,
          childrenMenus
        );
      } else {
        rootMenus[i].children = [];
      }
    }
    return rootMenus;
  };

  static getRootMenuChild = (
    id: string,
    childrenMenus: Array<MenuNode>
  ): Array<MenuNode> => {
    const menus = childrenMenus.filter((x) => x.parentId === id);
    for (let i = 0; i < menus.length; i++) {
      if (childrenMenus.find((x) => x.parentId === menus[i].id)) {
        menus[i].children = this.getRootMenuChild(menus[i].id, childrenMenus);
      } else {
        menus[i].children = [];
      }
    }
    return menus;
  };
}
