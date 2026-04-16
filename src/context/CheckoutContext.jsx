"use client";
import { createContext, useContext, useState } from "react";

const CheckoutContext = createContext(null);

export function CheckoutProvider({ children }) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [paymentResult, setPaymentResult] = useState(null);

  function openCheckout(ticket, qty) {
    setSelectedTicket(ticket);
    setQuantity(qty);
    setIsCheckoutOpen(true);
  }

  function closeCheckout() {
    setIsCheckoutOpen(false);
  }

  function openSuccess(result) {
    setIsCheckoutOpen(false);
    setPaymentResult(result);
    setIsSuccessOpen(true);
  }

  function closeSuccess() {
    setIsSuccessOpen(false);
    setPaymentResult(null);
    setSelectedTicket(null);
    setQuantity(1);
  }

  return (
    <CheckoutContext.Provider
      value={{
        isCheckoutOpen,
        isSuccessOpen,
        selectedTicket,
        quantity,
        paymentResult,
        openCheckout,
        closeCheckout,
        openSuccess,
        closeSuccess,
        setQuantity,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const ctx = useContext(CheckoutContext);
  if (!ctx) throw new Error("useCheckout must be used within CheckoutProvider");
  return ctx;
}
