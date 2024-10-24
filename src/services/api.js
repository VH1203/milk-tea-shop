export const fetchProducts = async () => {
    const response = await fetch('http://localhost:9999/products');
    const data = await response.json();
    return data;
  };
  