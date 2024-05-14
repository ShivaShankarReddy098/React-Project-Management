import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      //   close() {
      //     dialog.current.close();
      //   },
    };
  });
  const dialog = useRef();
  return createPortal(
    <dialog
      ref={dialog}
      className=" backdrop:bg-stone-900/90 p-7 rounded-lg outline-none bg-slate-500 text-stone-50 shadow-xl"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
