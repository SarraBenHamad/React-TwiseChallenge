import React from "react";
// import normalImg from "../../public/normal.jpg"; // Change the image path if needed

export default function Normal() {
  

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 animate-gradientMove"></div>
      <div className="flex flex-col items-center justify-center relative z-10 max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
        <h2 className="text-xl font-bold mb-4 text-center">No anomalies found ✅</h2>
        <img src="/normal.png" alt="Normal Equipment" className="w-80 mt-4" />
        <br></br>
       <div>
       <h3 className="text-xl font-bold mb-4 text-center"> Continue regular inspections for reliability.
       </h3>
       <h4 className="text-xl  mb-4 text-center">💬 Need assistance? Use our chatbot for maintenance tips and further diagnostics.
       </h4>

       </div>
      </div>
    </div>
  );
}
