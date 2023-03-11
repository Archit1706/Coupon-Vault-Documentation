# List all Campaigns

### API Endpoint

```
> /api/campaign/list
```

### Code

```js
import axios from "axios";
let response = await axios.request({
    headers: {
        Authorization: "Bearer abcdefghijklmnopqrstuvwxyz0123456789",
    },
    url: "https://your-website.com/api/campaign/list",
    method: "POST",
});
console.log(response.data);
```

### Response

```js
[
  {Array of objects of all campaigns ongoing and ended}
]
```
