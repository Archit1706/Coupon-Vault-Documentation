# Create SKU

### API Endpoint

```
> /api/skus/create
```

### Code

```js copy
import axios from "axios";
let response = await axios.request({
    url: "https://your-website.comreate",
    method: "POST",
    headers: {
        Authorization: "Bearer abcdefghijklmnopqrstuvwxyz0123456789",
        "Content-Type": "application/json",
    },
    data: JSON.stringify({
        skuId: "18",
        name: "Oranges",
        cost: 67,
        category: "Fruits",
    }),
});
console.log(response.data);
```

### Response

```js copy
{
  "message": "SKU created successfully",
  "success": true,
  "time": 1678544674222
}
```
