import React from "react";
// import faultyImg from "../../public/faulty.jpg"; 

export default function Faulty() {

  return (
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 animate-gradientMove"></div>
        <div className="flex flex-col items-center justify-center relative z-10 max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
          <h2 className="text-xl font-bold mb-4 text-center">Fault Detected! ⚠️</h2>
          <img src="/faulty.png" alt="Faulty Equipment" className="w-80 mt-4 " />
          <br></br>
         <div>
         <h3 className="text-xl font-bold mb-4 text-center"> Perform diagnostic checks and schedule maintenance.
         </h3>
         <h4 className="text-xl  mb-4 text-center">💬 Need help? Consult our chatbot for troubleshooting steps and advice.</h4>

         </div>
        </div>
      </div>
    );
}
