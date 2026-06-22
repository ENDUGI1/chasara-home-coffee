// Menu resmi Chasara Coffee (dari papan menu client).
// Harga dalam Rupiah. "signature" menandai menu andalan.
export const menu = [
  {
    category: 'Coffee',
    items: [
      { name: 'Espresso', price: 10000, desc: 'Sajian panas' },
      { name: 'Americano', price: 12000, desc: 'Panas · dingin 15rb' },
      { name: 'Caffe Latte', price: 15000, desc: 'Dingin' },
      { name: 'Chasara Latte', price: 20000, desc: 'Signature house blend', signature: true },
      { name: 'Aren Latte', price: 15000, desc: 'Manis gula aren · dingin' },
      { name: 'Butterscotch Latte', price: 18000, desc: 'Dingin' },
      { name: 'Vanilla Latte', price: 18000, desc: 'Dingin' },
      { name: 'Hazelnut Latte', price: 18000, desc: 'Dingin' },
      { name: 'Tiramisu Latte', price: 18000, desc: 'Dingin' },
      { name: 'Caramel Latte', price: 18000, desc: 'Dingin' },
      { name: 'Salted Caramel Latte', price: 18000, desc: 'Dingin' },
      { name: 'Pandan Latte', price: 18000, desc: 'Dingin' },
    ],
  },
  {
    category: 'Non-Coffee',
    items: [
      { name: 'Taro Latte', price: 18000, desc: 'Dingin' },
      { name: 'Red Velvet Latte', price: 18000, desc: 'Dingin' },
      { name: 'Choco Latte', price: 18000, desc: 'Dingin' },
      { name: 'Choco Banana Latte', price: 18000, desc: 'Dingin' },
      { name: 'Matcha Latte', price: 18000, desc: 'Dingin' },
      { name: 'Matcha Choco Latte', price: 18000, desc: 'Dingin' },
      { name: 'Lychee Yakult', price: 18000, desc: 'Segar · dingin' },
      { name: 'Lychee Tea', price: 18000, desc: 'Dingin' },
      { name: 'Thai Tea', price: 18000, desc: 'Dingin' },
      { name: 'Green Tea', price: 18000, desc: 'Dingin' },
      { name: 'Lemon Tea', price: 18000, desc: 'Dingin' },
      { name: 'Milo', price: 18000, desc: 'Dingin' },
    ],
  },
  {
    category: 'Makanan',
    items: [
      { name: 'Indomie Kuah', price: 15000, desc: 'Hangat, cocok teman ngopi' },
      { name: 'Indomie Goreng', price: 15000, desc: 'Gurih & mengenyangkan' },
    ],
  },
  {
    category: 'Camilan',
    items: [
      { name: 'Pisang Goreng', price: 15000, desc: 'Renyah di luar' },
      { name: 'Pisang Keju', price: 15000, desc: 'Dengan taburan keju' },
      { name: 'Singkong Goreng', price: 15000, desc: 'Gurih klasik' },
      { name: 'Kentang Goreng', price: 15000, desc: 'French fries' },
      { name: 'Tahu Cabe Garam', price: 17000, desc: 'Pedas gurih' },
      { name: 'Cireng', price: 15000, desc: 'Khas, kenyal' },
      { name: 'Mix Platter', price: 17000, desc: 'Aneka camilan jadi satu' },
    ],
  },
]
