const orders = [
  {
    orderId: "123",
    customerId: "123",
    deliveryDate: "01-01-2020",
    delivered: true,
    items: [
      { productId: "123", price: 55 },
      { productId: "234", price: 30 },
    ],
  },
  {
    orderId: "234",
    customerId: "234",
    deliveryDate: "01-02-2020",
    delivered: false,
    items: [{ productId: "234", price: 30 }],
  },
  {
    orderId: "345",
    customerId: "234",
    deliveryDate: "05-01-2020",
    delivered: true,
    items: [
      { productId: "567", price: 30 },
      { productId: "678", price: 80 },
    ],
  },
  {
    orderId: "456",
    customerId: "345",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "789", price: 12 },
      { productId: "890", price: 90 },
    ],
  },
  {
    orderId: "578",
    customerId: "456",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "901", price: 43 },
      { productId: "123", price: 55 },
    ],
  },
];

const orderNotDelivered = (orders, customer) =>
  orders.filter((order) => order.customerId === customer && !order.delivered);

const totalPrice = (orders) =>
  orders.map((order) => ({
    ...order,
    totalOrder: order.items.reduce((acc, item) => acc + item.price, 0),
  }));

const allDelivered = (orders) => orders.every((order) => order.delivered);

const productsSold = (orders, productId) =>
  orders.reduce(
    (acc, order) =>
      acc +
      order.items.reduce(
        (acc, item) => acc + (item.productId === productId),
        0
      ),
    0
  );
