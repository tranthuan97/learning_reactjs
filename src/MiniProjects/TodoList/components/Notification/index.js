import { Alert, notification } from "antd";

const openNotification = (type, message, alertDescription, className) => {
  notification.open({
    description:
      <Alert
        message={message}
        description={alertDescription}
        type={type}
        showIcon
      />,
    onClick: () => {
    },
    duration: 1,
    className,
    placement: "topLeft"
  });
};

export default openNotification;