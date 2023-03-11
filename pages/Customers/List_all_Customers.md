# List all Customers

### API Endpoint

```
> /api/customer/list
```

### Code

```js copy
import axios from "axios";
let response = await axios.request({
    headers: {
        Authorization: "Bearer abcdefghijklmnopqrstuvwxyz0123456789",
    },
    url: "https://your-website.com/api/customer/list",
    method: "POST",
});
console.log(response.data);
```

### Response

```js copy
[
  {Array all Customer}
]
```
