import { useState } from "react";
import "./Alert.css"
import { Reset } from "../Compo";

export default function Alert(props) {

  function Dismiss() {
    document.querySelector("#alert_box").classList.add("hidden");
  }

  function Reset() {
      document.querySelector("#comment").value = '';
      document.querySelector("#alert_box").classList.add("hidden");
  }


  return (
    <div id="alert_box" className="hidden absolute h-screen w-screen bg-red-500 z-10 bg-opacity-80 " >
      
      <div
        id="alert"
        className={` absolute left-[38%] top-60 w-96 p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800`}
        role="alert"
      >
        <div className="flex items-center">
          <svg
            className="flex-shrink-0 w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <h3 className="text-lg font-medium">Caution</h3>
        </div>
        <div className="mt-2 mb-4 text-sm">
          Are you Sure to Erase all your text??
        </div>
        <div className="flex">
          <button
            type="button"
            className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            onClick={Reset}
          >
            Reset
          </button>
          <button
            type="button"
            className="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
            data-dismiss-target="#alert-additional-content-2"
            aria-label="Close"
            onClick={Dismiss}
          >
            Dismiss
          </button>
        </div>
        
      </div>
      
    </div>
  );
}
