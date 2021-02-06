import { STATUS_TEXT } from "./constants";

/*
    0: Tükendi
    1: Henüz Listelenmedi
    2: Satışa Çıktı!
*/
export const checkStatus = (type) => {
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

export const statusText = (type) => {
  switch (type) {
    case 0:
      return STATUS_TEXT.SOLD_OUT;
    case 1:
      return STATUS_TEXT.NOT_LISTED;
    case 2:
      return STATUS_TEXT.ON_SALE;
    default:
      return STATUS_TEXT.UNKNOWN;
  }
};
