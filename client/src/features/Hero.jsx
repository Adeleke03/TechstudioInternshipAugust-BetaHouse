import React, { useState } from "react";
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

const Hero = () => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [bedroom, setBedroom] = useState(0);
  const [results, setResults] = useState([]);

  const incrementBedroom = () => setBedroom((prev) => prev + 1);
  const decrementBedroom = () => {
    if (bedroom > 0) setBedroom((prev) => prev - 1);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/property/properties/search`, {
        params: {
          location,
          type,
          bedroom,
        },
      });

      setResults(response.data.properties);
      console.log(response.data.properties);
    } catch (error) {
      console.error("Search failed:", error.response?.data || error.message);
    }
  };

  return (
    <main className="wrapper px-4 py-10">
      {/* ... rest of your JSX unchanged ... */}
    </main>
  );
};

export default Hero;
