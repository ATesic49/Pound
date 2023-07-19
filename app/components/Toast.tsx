"use client";
import axios from "axios";
import React, { useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default async function Toast() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post("http://localhost:3000/api/contact");
        if (res.data.status === "success") {
          return toast("USPEH");
        } else {
          return console.log("fail");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </div>
  );
}
