# Calculate discounted price after applying a Coupon

### API Endpoint

```
> /api/validate/redeem
```

### Code

```js copy
import axios from "axios";
let response = await axios.request({
    url: "https://your-website.com/api/validate/redeem",
    method: "POST",
    headers: {
        Authorization: "Bearer abcdefghijklmnopqrstuvwxyz0123456789",
        "Content-Type": "application/js copyon",
    },
    data: js copyON.stringify({
        couponCode: "HOT20-PWI",
        customerId: "1",
        items: [
            { skuId: 1, quantity: 2 },
            { skuId: 3, quantity: 3 },
            { skuId: 20, quantity: 2 },
        ],
        paymentInfo: { amount: 500, method: "gpay" },
    }),
});
console.log(response.data);
```

### Response

```js copy
{
  "message": "Valid Dynamic Coupon",
  "success": true,
  "valid": true,
  "data": [
    {
      "skuId": 1,
      "quantity": 2,
      "newcost": 111.33333333333333
    },
    {
      "skuId": 3,
      "quantity": 3,
      "newcost": 209.33333333333334
    },
    {
      "skuId": 20,
      "quantity": 2,
      "newcost": 289.3333333333333
    }
  ],
  "total": 610
}
```
