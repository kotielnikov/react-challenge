/**
 * Pseudo APIs
 */

let flag = false;

export const saveUser = async () => {
  return new Promise((resolve) => {
    if (!flag) {
      flag = true;
      resolve({ state: "success" });
      setTimeout(() => {
        flag = false;
      }, 5e3);
    } else {
      resolve({ state: "error", error: "Api Rate Limit" });
    }
  });
};

export const getAddress = async () => {
  return {
    old: {
      address: "Atelierstraße 29",
      postalCode: "81671",
      city: "München",
    },
    new: {
      address: "Sonnenstraße 15",
      postalCode: "80331",
      city: "München",
    },
  };
};

export const getOwners = async () => {
  return ["Florian Biller", "Sebastian Schlecht"];
};
