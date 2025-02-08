import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../AnimatedBackground.css";
import industrie from "../../public/industrie.jpg"

export default function PredictiveMaintenance() {
  const [formData, setFormData] = useState({
    temperature: 25,
    pressure: "",
    vibration: "",
    humidity: "",
  });
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSliderChange = (e) => {
    setFormData({ ...formData, temperature: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await fetch("https://industrialequipment.onrender.com/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    const data = await response.json();
    setResult(data.prediction);
    console.log(data)


    if (data.prediction === 1) {
        navigate("/faulty"); // Redirect to Faulty page
      } else {
        navigate("/normal"); // Redirect to Normal page
      }
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };
  

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 animate-gradientMove"></div>
      <div className="relative z-10 max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
        <h2 className="text-xl font-bold mb-4 text-center">Predict Equipment Fault</h2>
        <img src={industrie} alt="Industry" className="w-full h-48 object-cover rounded-lg mb-4" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Temperature ({formData.temperature}°C)</label>
            <input
              type="range"
              name="temperature"
              min="-20"
              max="200"
              value={formData.temperature}
              onChange={handleSliderChange}
              className="w-full"
            />
          </div>
          {Object.keys(formData).map((field) => (
            field !== "temperature" && (
              <div key={field}>
                <label className="block text-gray-700 capitalize">{field}</label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                  required
                />
              </div>
            )
          ))}
          <button

            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 cursor-pointer"
          >
            Predict
          </button>
        </form>
        {result && (
          <div className={`mt-4 p-3 text-center font-bold ${result === "Faulty" ? "text-red-500" : "text-green-500"}`}>
            Result: {result}
          </div>
        )}
      </div>
    </div>
  );
}
