# List all Static Coupons

### API Endpoint

```
> /api/coupon/static/list
```

### Code

```js copy
import axios from "axios";
let response = await axios.request({
    headers: {
        Authorization: "Bearer abcdefghijklmnopqrstuvwxyz0123456789",
    },
    url: "https://your-website.com/api/coupon/static/list",
    method: "POST",
});
console.log(response.data);
```

### Response

```js copy
[
  {Array all static coupons}
]
```
