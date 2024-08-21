export const fetchProducts = async () => {
    const cacheKey = 'products';
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      return JSON.parse(cachedData);
    }
  
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    localStorage.setItem(cacheKey, JSON.stringify(data));
    return data;
  };
  