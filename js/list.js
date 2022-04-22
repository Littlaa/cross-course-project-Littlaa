const baseUrl =
  "https://littlaa.one/rainydays/wp-json/wc/store/products?consumer_key=ck_f439517697d4080770ef3129d79e40541faa4ef&consumer_secret=cs_9f4811b94a92e24c9e6064f6d9fc886425585fdf";

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);
}

getProducts(baseUrl);
