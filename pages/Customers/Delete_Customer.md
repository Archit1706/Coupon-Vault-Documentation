# Delete Customer

### API Endpoint

```
> /api/customer/delete
```

### Code

```js copy
import axios from "axios";
let response = await axios.request({
    url: "https://your-website.com/api/customer/delete",
    method: "POST",
    headers: {
        Authorization: "Bearer abcdefghijklmnopqrstuvwxyz0123456789",
        "Content-Type": "application/json",
    },
    data: JSON.stringify({
        id: "640c7d435f1d16ba9301f2e1",
    }),
});
console.log(response.data);
```

### Response

```js copy
{
  "message": "Customer deleted successfully",
  "success": true,
  "time": 1678544674222
}
```
