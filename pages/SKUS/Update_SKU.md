# Update a SKU

### API Endpoint

```
> /api/skus/update
```

### Code

```js copy
import axios from "axios";
let response = await axios.request({
    url: "https://CouponVault.sidd065.repl.co/api/skus/update",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    data: JSON.stringify({
        skuId: "123",
        "Any SKU Parameter": "value",
    }),
});
console.log(response.data);
```

### Response

```js copy
{
  "message": "SKU updated successfully",
  "success": true,
  "time": 1678544674222
}
```
