import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();
  const title = useRef();
  const Description = useRef();
  const dueDate = useRef();
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = Description.current.value;
    const enteredDueDated = dueDate.current.value;
    if (
      enteredDueDated.trim() == "" ||
      enteredDescription.trim() == "" ||
      enteredTitle.trim() == ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      Description: enteredDescription,
      dueDate: enteredDueDated,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl  font-bold">InValid Inputs</h2>
        <p>Oops... looks like you forget to enter a value.</p>
        <p>Please make sure you provide a valid for every input fields.</p>
      </Modal>
      <div className=" w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={Description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
