import React from "react";
import { useState } from "react";
import api from '../services/api'
import "../app.css";

function useSearchCep() {
  const [cepInput, setCepInput] = useState("");
  const [addressData, setAddressData] = useState({});
  const [isEmptyField, setIsEmptyField] = useState(false);
  const [hasError, setHasError] = useState(false);
  const hasAddressData = Object.keys(addressData).length > 0;

  function resetInput() {
    setCepInput("");
    setIsEmptyField(false);
  }

  async function handleSearchCep() {
    const isEmptyInputCep = cepInput.trim() === "";

    if (isEmptyInputCep) {
      setIsEmptyField(true);
      return;
    }

    try {
      const cepResponse = await api.get(`${cepInput}/json/`);
      setAddressData(cepResponse.data);
      resetInput();
      setHasError(false);
    } catch (error) {
      resetInput();
      setHasError(true);
    }
  }

  return {
      cepInput,
      setCepInput,
      addressData,
      isEmptyField,
      hasError,
      hasAddressData,
      handleSearchCep
  };
}

export default useSearchCep;
