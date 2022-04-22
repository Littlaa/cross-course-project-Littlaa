const baseUrl = "https://littlaa.one/rainydays/wp-json/wc/v3/products";

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);
}

getProducts(baseUrl);
