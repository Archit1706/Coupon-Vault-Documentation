# Create a Static Coupon

### API Endpoint

```
> /api/coupon/static
```

### Code

```js copy
import axios from "axios";
let response = await axios.request({
    url: "https://your-website.com/api/coupon/static",
    method: "POST",
    headers: {
        Authorization: "Bearer abcdefghijklmnopqrstuvwxyz0123456789",
        "Content-Type": "application/json",
    },
    data: JSON.stringify({
        couponCode: "PAYTM500",
        creationDate: "2023-03-11",
        expiryDate: "2024-03-11",
        discountType: "1",
        discountAmt: 70,
        discountPect: 0,
        discountItem: 0,
        freeItem: "",
        skuIds: ["1", "4", "6"],
        conditions: [
            {
                parameter: "payment.method",
                compare: "equal",
                value: "paytm",
            },
        ],
        title: "Paytm Offer",
        desc: "Get Flat Rs.70 off with Paytm",
        userLimit: 4,
        format: "PAYTM500",
    }),
});
console.log(response.data);
```

### Response

```js copy
{
  "message": "Static Coupon created successfully",
  "success": true,
  "data": “PAYTM500”
}
```
