import { atom } from "recoil";

const dataAtom = atom({
  key: "dataAtom",
  default: [
    [0, 1, 0, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0],
    [1, 0, 1, 0]
  ]
});

export { dataAtom };
