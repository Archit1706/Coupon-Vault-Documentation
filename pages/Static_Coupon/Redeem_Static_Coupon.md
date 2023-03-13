# Redeem Static Coupon

### API Endpoint

```
> /api/coupon/redeemed
```

### Code

```js copy
import axios from "axios";
let response = await axios.request({
    url: "https://your-website.com/api/coupon/redeemed",
    method: "POST",
    headers: {
        Authorization: "Bearer abcdefghijklmnopqrstuvwxyz0123456789",
        "Content-Type": "application/json",
    },
    data: JSON.stringify({
        couponCode: "PAYTM50",
        customerId: 123,
    }),
});
console.log(response.data);
```

### Response

```js copy
{
message: "Redeemed Static Coupon",
success: true,
valid: true,
}
```
