// App.jsx
import React, { useEffect, useState } from "react";
import Encabezado from "./componentes/nav/Encabezado";
import Card from "./componentes/Card/Card";
import Suptitulo from "./componentes/suptitulo/Suptitulo";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("stays.json");
        const resJson = await res.json();
        setData(resJson);
        setFilteredData(resJson);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (city, maxGuests) => {
    const filtered = data.filter((listing) => {
      const cityMatch = listing.city.toLowerCase().includes(city.toLowerCase());
      const maxGuestsMatch =
        maxGuests === "" || listing.maxGuests >= parseInt(maxGuests);
      return cityMatch && maxGuestsMatch;
    });

    setFilteredData(filtered);
  };

  return (
    <div>
      <Encabezado onFilterChange={handleFilterChange} />
      <Suptitulo />
      {filteredData.map((listing, i) => (
        <Card
          key={i}
          img={listing.photo}
          city={listing.city}
          superHost={listing.superHost}
          title={listing.title}
          rating={listing.rating}
          maxGuests={listing.maxGuests}
          type={listing.type}
          beds={listing.beds}
        />
      ))}
    </div>
  );
}

export default App;
