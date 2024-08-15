"use client";
import { useRef, useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa";
export default function GoogleSchedulerButton() {
  const ref = useRef<HTMLDialogElement | null>(null);
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (showModel) {
      ref.current.showModal();
    } else {
      ref.current.close();
    }
  }, [showModel]);
  return (
    <>
      <button className="" onClick={() => setShowModel((prev) => !prev)}>
        Book an Appointment
        <span className="btn btn-icon bg-slate-600 hover:bg-slate-700 border-slate-600 hover:border-slate-700 text-white rounded-full ml-2">
          <FaPhone className="text-xl" />
        </span>
      </button>
      <dialog
        ref={ref}
        onClick={(e) => {
          if (!ref.current) {
            return;
          }

          const dialogDimensions = ref.current.getBoundingClientRect();
          if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
          ) {
            ref.current.close();
            setShowModel(false);
          }
        }}
        className="h-full w-full rounded-lg shadow-md"
      >
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0L4oVtrBp7MX3rDYUpZ6rmKN5hpK1IsSwGSaOTN3in_O29l56uEIb5ZuesvhyT--JHR185R71b?gv=true"
          width="100%"
          height="100%"
        />
      </dialog>
    </>
  );
}
