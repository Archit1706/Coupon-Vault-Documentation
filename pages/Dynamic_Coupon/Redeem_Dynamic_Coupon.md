# Redeem Dynamic Coupon

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
        "Content-Type": "application/js copyon",
    },
    data: js copyON.stringify({
        couponCode: "YEAR20-EUQ",
        customerId: 123,
    }),
});
console.log(response.data);
```

### Response

```js copy
{
message: "Redeemed Dynamic Coupon",
success: true,
valid: true,
}
```
