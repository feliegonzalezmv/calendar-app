import { addHours, differenceInSeconds } from "date-fns";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const CalendarModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [formValues, setFormValues] = useState({
    title: "Felipe",
    notes: "Gonzalez",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const onInputChange = ({
    target,
  }: ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >) => {
    setFormValues({ ...formValues, [target.name]: target.value });
  };

  const onDateChange = (event: Date | null, changing: string) => {
    if (event) setFormValues({ ...formValues, [changing]: event });
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (e: SyntheticEvent) => {
    e?.preventDefault();

    const difference = differenceInSeconds(formValues.end, formValues.start);

    if (isNaN(difference) || difference <= 0) {
      console.log("Date error");
      return;
    }

    if (formValues.title.length <= 0) return;

    console.log("formValues :>> ", formValues);

    //TODO

    //CLose modal
    //Remove screen errors
  };
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-background"
      closeTimeoutMS={200}
    >
      <h1> New Event </h1>
      <hr />
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label>Start date</label>
          <DatePicker
            selected={formValues.start}
            onChange={(event) => onDateChange(event, "start")}
            className="form-control"
            dateFormat="Pp"
            showTimeSelect
          />
        </div>

        <div className="form-group mb-2">
          <label>End date</label>
          <DatePicker
            minDate={formValues.start}
            selected={formValues.end}
            onChange={(event) => onDateChange(event, "end")}
            className="form-control"
            dateFormat="Pp"
            showTimeSelect
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Title and notes</label>
          <input
            type="text"
            className="form-control"
            placeholder="Event title"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={onInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Short description
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            className="form-control"
            placeholder="Notes"
            rows={5} // Change this line
            name="notes"
            value={formValues.notes}
            onChange={onInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Additional information
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Save</span>
        </button>
      </form>
    </Modal>
  );
};
