# Delete a SKU

### API Endpoint

```
> /api/skus/delete
```

### Code

```js copy
import axios from "axios";
let response = await axios.request({
    url: "https://CouponVault.sidd065.repl.co/api/skus/delete",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    data: JSON.stringify({
        skuId: "123",
    }),
});
console.log(response.data);
```

### Response

```js copy
{
  "message": "SKU deleted successfully",
  "success": true,
  "time": 1678544674222
}
```
