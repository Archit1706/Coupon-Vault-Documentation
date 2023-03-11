# Create a Coupon in a Campaign

### API Endpoint

```
> /api/campaign/coupon
```

### Code

```js copy
import axios from "axios";
let response = await axios.request({
    url: "https://your-website.com/api/campaign/coupon",
    method: "POST",
    headers: {
        Authorization: "Bearer abcdefghijklmnopqrstuvwxyz0123456789",
        "Content-Type": "application/js copyon",
    },
    data: js copyON.stringify({
        id: "640c7d435f1d16ba9301f2e1",
        customerId: "123",
    }),
});
console.log(response.data);
```

### Response

```js copy
{
  "message": "Coupon created successfully",
  "success": true,
  "data": “EXAMPLE_1yA”
}
```
