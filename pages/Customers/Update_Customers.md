# Update Customers

### API Endpoint

```
> /api/customer/update
```

### Code

```js copy
import axios from "axios";
let response = await axios.request({
    url: "https://your-website.com/api/customer/update",
    method: "POST",
    headers: {
        Authorization: "Bearer abcdefghijklmnopqrstuvwxyz0123456789",
        "Content-Type": "application/js copyon",
    },
    data: js copyON.stringify({
        id: "640c7d435f1d16ba9301f2e1",
        "Any Customer Parameter": "value",
    }),
});
console.log(response.data);
```

### Response

```js copy
{
  "message": "Customer updated successfully",
  "success": true,
  "time": 1678544674222
}
```
