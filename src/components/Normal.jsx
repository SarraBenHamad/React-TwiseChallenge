import { useNavigate } from "react-router-dom";

export default function Normal() {
  const navigate = useNavigate();

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
       <button 
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer w-full"
          >
            ← Back to Prediction
          </button>
       </div>
      </div>
    </div>
  );
}
