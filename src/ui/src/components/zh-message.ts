import { ElMessage, ElMessageBox } from 'element-plus';

const popSuccessMessage = (message: string, duration = 5000) => {
  ElMessage({
    message,
    grouping: true,
    type: 'success',
    duration,
    showClose: true,
  });
};

const popErrorMessage = (message: string, duration = 5000) => {
  ElMessage({
    message,
    grouping: true,
    type: 'error',
    duration,
    showClose: true,
  });
};

const popInfoMessage = (message: string, duration = 5000) => {
  ElMessage({
    message,
    grouping: true,
    type: 'info',
    duration,
    showClose: true,
  });
};

const popConfirmMessage = async (message: string, title: string) => {
  try {
    const result = await ElMessageBox.confirm(message, title, {
      closeOnClickModal: false,
    });
    return result === 'confirm';
  } catch (error) {
    console.info('cancel');
    return false;
  }
};

export {
  popSuccessMessage,
  popErrorMessage,
  popInfoMessage,
  popConfirmMessage,
};
