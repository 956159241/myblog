import { popErrorMessage, popSuccessMessage } from '@/components/hs-message';
import Clipboard from 'clipboard';
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
}
