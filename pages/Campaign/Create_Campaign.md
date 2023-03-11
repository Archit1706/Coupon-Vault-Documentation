# Create a Campaign

### API Endpoint

```
> /api/campaign/create
```

### Example Code

```js
import axios from "axios";
let response = await axios.request({
    url: "https://your-website.com/api/campaign/create",
    method: "POST",
    headers: {
        Authorization: "Bearer abcdefghijklmnopqrstuvwxyz0123456789",
        "Content-Type": "application/json",
    },
    data: JSON.stringify({
        name: "10% off all Fruits",
        creationDate: "2023-03-11",
        expiryDate: "2023-03-21",
        couponCount: 600,
        discountType: "2",
        discount: 0,
        discountPect: 10,
        discountItem: 0,
        freeItem: "",
        skuIds: ["1", "11", "18"],
        conditions: [
            {
                parameter: "item.category",
                compare: "equal",
                value: "Fruits",
            },
            {
                parameter: "payment.amount",
                compare: "greater",
                value: 150,
            },
        ],
        redemption: 203,
        title: "10% off all Fruits",
        desc: "Get 10% off all fruits in your cart above Rs.150",
        format: "Fresh10-%*%",
    }),
});
console.log(response.data);
```

### Response

```json
{
    "message": "Campaign created successfully",
    "success": true,
    "time": 1678544674222
}
```
