import { LightBox } from "../components";

export const handlePopUp = (state, setState) => {
  setTimeout(() => {
    setState(!state);
  }, 5000);
  return <LightBox />;
};
