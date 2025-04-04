import React, { useEffect } from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    if (!word) return "";
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  useEffect(() => {
    if (props.alert) {
      const toastElement = document.getElementById("liveToast");
      if (toastElement) {
        const toast = new window.bootstrap.Toast(toastElement);
        toast.show();
      }
    }
  }, [props.alert]);

  return (
    <div
      style={{
        position: "fixed",
        top: "80px", // Adjust this to position below navbar
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1050, // Ensure it stays on top
        minWidth: "250px", // Set a small box width
      }}
    >
      <div
        id="liveToast"
        className="toast align-items-center text-white bg-success border-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        {props.alert && (
          <div className="d-flex">
            <div className="toast-body">
              <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        )}
      </div>
    </div>
  );
}
