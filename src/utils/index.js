import { DEVICE_TYPE, STATUS_TEXT } from "./constants";

/*
    0: Tükendi
    1: Henüz Listelenmedi
    2: Satışa Çıktı!
*/
export const checkStatusColor = (type) => {
  switch (type) {
    case 0:
      return "red";
    case 1:
      return "gray";
    case 2:
      return "green";
    default:
      return "yellow";
  }
};

export const checkStatusText = (type) => {
  switch (type) {
    case 0:
      return STATUS_TEXT[0];
    case 1:
      return STATUS_TEXT[1];
    case 2:
      return STATUS_TEXT[2];
    default:
      return STATUS_TEXT[3];
  }
};

export const checkDeviceType = (type) => {
  switch (type) {
    case 0:
      return DEVICE_TYPE[0];
    case 1:
      return DEVICE_TYPE[1];
    default:
      return DEVICE_TYPE[2];
  }
};
