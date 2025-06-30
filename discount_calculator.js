function discountCalculator(discount) {
  return function(price) {
    return price - price * (discount / 100);
  }
}

let discounter = discountCalculator(10);  // 10% discount dega
console.log(discounter(200));

// 200 ka 10% discount par kya bill hoga