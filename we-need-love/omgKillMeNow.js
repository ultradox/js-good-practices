function check_to_see_if_the_first_cart_is_full(crt) {
  let full = false
  if (crt.size > 100) {
    full = true
  }
  return full;
}

let cart_name_as_string = 'Shopping Cart';
let the_carts = [{
  name: cartNameAsString,
  size: 101
}];

let the_first_cart = the_carts[0];
let is_the_cart_full = check_to_see_if_the_first_cart_is_full(the_first_cart);
