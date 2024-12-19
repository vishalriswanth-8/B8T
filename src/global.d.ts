declare global {
  interface Window {
    updateCart: (productId: string, action: string) => void;
    showQuantityPopup: (productId: string, currentQuantity: number) => void;
    decrementQuantity: (productId: string) => void;
    closeQuantityPopup: () => void;
  }
}

export {};
