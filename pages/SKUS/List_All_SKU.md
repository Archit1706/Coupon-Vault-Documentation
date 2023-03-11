# List all SKUs

### API Endpoint

```
> /api/skus/list
```

### Code

```js copy
import axios from "axios";
let response = await axios.request({
    headers: {
        Authorization: "Bearer abcdefghijklmnopqrstuvwxyz0123456789",
    },
    url: "https://your-website.comist",
    method: "POST",
});
console.log(response.data);
```

### Response

```js copy
[
  {Array of all SKUs}
]
```
