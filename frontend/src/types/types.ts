export type User = {
  name: string;
  email: string;
  photo: string;
  gender: string;
  role: string;
  dob: string;
  _id: string;
}

export type Products = {
  name: string;
  photo: string;
  category: string;
  price: number;
  stock: number;
  _id: string;
}

export type ShippingInfo = {
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
}

export type CartItem = {
  name: string;
  photo: string;
  price: number;
  quantity: number;
  productId: string;
  stock: number;
};

export type OrderItem = Omit < CartItem, "stock" > & {
  _id: string
};

export type Order = {
  orderItems: OrderItem[];
  shippingInfo: ShippingInfo;
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  status: string;
  user: {
    name: string;
    _id: string;
  };
  _id: string;
}
 
type countAndChange = {
  revenue: number;
    product: number;
    user: number;
    order: number;
}

type LatestTransaction = {
  _id: string;
  discount: number;
  amount: number;
  quantity: number;
  status: string;
}

export type Stats = {
  categoryCount:Record<string, number>[],
  changePercent:countAndChange,
  count:countAndChange,
  chart: {
    order: number[],
    revenue: number[],
  },
  userRatio:{
    male: number;
    female: number;
},
  latestTransaction: LatestTransaction[],
};

type RevenueDistribution={
  netMargin: number;
  discount: number;
  productionCost: number;
  burnt: number;
  marketingCost: number;
};

export type Pie={
  orderFullfillment:{
    processing: number;
    shipped: number;
    delivered: number;
},
  productCategories:Record<string, number>[],
  stockAvailablity: {
    inStock: number;
    outOfStock: number;
},
  revenueDistribution:RevenueDistribution,
  usersAgeGroup: {
    teen: number;
    adult: number;
    old: number;
},
  adminCustomer: {
    admin: number;
    customer: number;
}
};

export type Bar ={
  users:number[],
  products:number[],
  orders:number[],
}

export type Line={
  users:number[],
  products:number[],
  discount:number[],
  revenue:number[],
}