# Create Customers

### API Endpoint

```
> /api/customer/create
```

### Code

```js copy
import axios from "axios";
let response = await axios.request({
    url: "https://your-website.com/api/customer/create",
    method: "POST",
    headers: {
        Authorization: "Bearer abcdefghijklmnopqrstuvwxyz0123456789",
        "Content-Type": "application/json",
    },
    data: JSON.stringify({
        name: "Mokshit Surana",
        email: "gigaMoksh@gmail.com",
        phone: "+918356943563",
        recency: "IN",
        NumberofDealsPurchases: 3,
        NumberofWebPurchases: 8,
        NumberofStorePurchases: 4,
        Customer_For: 941,
        Age: 66,
        Spent: 1617,
        Clusters: 0,
    }),
});
console.log(response.data);
```

### Response

```js copy
{
  "message": "Customer created successfully",
  "success": true,
  "time": 1678544674222
}
```
