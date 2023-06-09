# Validate Keys

### API Endpoint

```
> /api/validate/keys
```

### Code

```js copy
import axios from "axios";
let response = await axios.request({
    url: "https://your-website.com/api/validate/keys",
    method: "POST",
    headers: {
        Authorization: "Bearer abcdefghijklmnopqrstuvwxyz0123456789",
        "Content-Type": "application/json",
    },
});
console.log(response.data);
```

### Response

```js copy
{
    "message": "Keys listed successful",
    "success": true,
    "data": {
        "paymentInfo": {
            "amount": 123,
            "method": "paytm"
        },
        "items": {
            "skuId": 123,
            "quantity": 123
        },
        "customer": [
            "id",
            "name",
            "email",
            "phone",
            "Income",
            "Recency",
            "NumDealsPurchases",
            "NumWebPurchases",
            "NumCatalogPurchases",
            "NumStorePurchases",
            "NumWebVisitsMonth",
            "Customer_For",
            "Age",
            "Spent",
            "Clusters"
        ]
    }
}
```
