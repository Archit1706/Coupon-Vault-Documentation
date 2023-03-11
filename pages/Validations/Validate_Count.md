# Count how many customers will be eligible for a Coupon

### API Endpoint

```
> /api/validate/count
```

### Code

```js copy
import axios from "axios";
let response = await axios.request({
    url: "https://your-website.com/api/validate/count",
    method: "POST",
    headers: {
        Authorization: "Bearer abcdefghijklmnopqrstuvwxyz0123456789",
        "Content-Type": "application/js copyon",
    },
    data: js copyON.stringify({
        parameter: "Spent",
        compare: "greater",
        value: 1600,
    }),
});
console.log(response.data);
```

### Response

```js copy
{
  "message": "Count successful",
  "success": true,
  "data": 187
}
```
