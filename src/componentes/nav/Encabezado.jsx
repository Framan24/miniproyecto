import React, { useState } from "react";
import logo from '../img/logo.png';
import { GoSearch } from "react-icons/go";
import Modal from 'react-modal'; // Importa react-modal
import "./Encabezado.css";

function Encabezado({ onFilterChange }) {
  const [city, setCity] = useState("");
  const [maxGuests, setMaxGuests] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false); // Estado para controlar la visibilidad del modal

  const handleSearch = () => {
    onFilterChange(city, maxGuests);
  };

  // Función para abrir el modal
  const openModal = () => {
    setModalIsOpen(true);
  }

  // Función para cerrar el modal
  const closeModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div className="titulo">
      <img src={logo} alt="imagen de la marca de la pagina" />
      <div className="bar">
        <input className="input1"
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input className="input2"
          type="text"
          placeholder="Add guests"
          value={maxGuests}
          onChange={(e) => setMaxGuests(e.target.value)}
        />
        <button className="button" onClick={handleSearch}>
          <GoSearch />
        </button>
       
        <button className="button" onClick={openModal}>
          Abrir Modal
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Ejemplo de Modal"
      >
         <input className="input1"
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
         <input className="input2"
          type="text"
          placeholder="Add guests"
          value={maxGuests}
          onChange={(e) => setMaxGuests(e.target.value)}
        />
         <button className="button" onClick={handleSearch}>
          <GoSearch />
        </button>
        <button onClick={closeModal}>Cerrar Modal</button>
      </Modal>
    </div>
  );
}

export default Encabezado;
