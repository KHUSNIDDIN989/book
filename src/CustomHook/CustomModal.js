import { useContext } from "react";
import { modalContext } from "../Context/ContextModal";

function CustomModal() {
  const { modal, setModal } = useContext(modalContext);
  return { modal, setModal };
}

export default CustomModal;
