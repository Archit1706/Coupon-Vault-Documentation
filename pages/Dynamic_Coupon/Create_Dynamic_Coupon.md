# Create a Dynamic Coupon

### API Endpoint

```
> /api/coupon/dynamic
```

### Code

```js copy
import axios from "axios";
let response = await axios.request({
    url: "https://your-website.com/api/coupon/dynamic",
    method: "POST",
    headers: {
        Authorization: "Bearer abcdefghijklmnopqrstuvwxyz0123456789",
        "Content-Type": "application/json",
    },
    data: JSON.stringify({
        customerId: "123",
        creationDate: "2023-03-11",
        expiryDate: "2023-04-11",
        discountType: "1",
        discount: 20,
        discountPect: 0,
        discountItem: 0,
        freeItem: "",
        skuIds: [],
        conditions: [
            {
                parameter: "customer.customer_For",
                compare: "greater",
                value: 365,
            },
        ],
        campaign: "640c7d435f1d16ba9301f2e1",
        title: "Loyality Benefit",
        desc: "20% off on whole cart",
        enabled: true,
        redeemed: false,
        format: "YEAR20-$$$",
    }),
});
console.log(response.data);
```

### Response

```js copy
{
  "message": "Dynamic Coupon created successfully",
  "success": true,
  "data": "YEAR20-EUQ"
}
```
