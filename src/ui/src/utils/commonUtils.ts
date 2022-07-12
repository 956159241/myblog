import { popErrorMessage, popSuccessMessage } from '@/components/zh-message';
import Clipboard from 'clipboard';
export default class CommonUtils {
  static copy = (className: string, successInfo: string, errorInfo: string) => {
    const newClassName = className?.replaceAll(' ', '.')?.replaceAll(' ', '');
    const clipboard = new Clipboard(`.${newClassName}`, {
      text: function (trigger) {
        console.log(trigger);
        return (
          trigger.getAttribute('data-clipboard-text') || '未知原因, 无法复制'
        ); // 返回需要复制的内容
      },
    });
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
