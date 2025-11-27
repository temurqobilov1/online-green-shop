import { notification } from "antd";

type NotifyType = "confirm_password" | "add_to_cart" | "login"; 

export const notificationApi = () => {
  const notify = (type: NotifyType) => {
    switch (type) {
      case "confirm_password":
        return notification.error({ message: "Passwrods don't match !" });
      case "add_to_cart":
        return notification.success({ message: "Product added to cart!" });
      case "login":
        return notification.success({ message: "Logged in successfully" });
    }
  };

  return notify;
};
