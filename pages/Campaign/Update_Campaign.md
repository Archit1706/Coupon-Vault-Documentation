# Update Campaign

### API Endpoint

```curl
> /api/campaign/update
```

### Code

```js copy
import axios from "axios";
let response = await axios.request({
    url: "https://your-website.com/api/campaign/update",
    method: "POST",
    headers: {
        Authorization: "Bearer abcdefghijklmnopqrstuvwxyz0123456789",
        "Content-Type": "application/js copyon",
    },
    data: js copyON.stringify({
        id: "640c7d435f1d16ba9301f2e1",
        "Any Campaign Parameter": "value",
    }),
});
console.log(response.data);
```

### Response

```js copy
{
  "message": "Campaign updated successfully",
  "success": true,
  "time": 1678544674222
}
```
