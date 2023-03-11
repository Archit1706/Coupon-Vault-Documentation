# Customers Schema

The Customer object represents a customer and contains information about their name, income, email, phone number, recency, region, number of deals/purchases, number of web purchases, number of store purchases, customer for how long and age.

### Data Model

| Attribute              | Type   | Description                                                                                              |
| ---------------------- | ------ | -------------------------------------------------------------------------------------------------------- |
| name                   | string | A string representing the name of the customer.                                                          |
| email                  | string | A string representing the email of the customer.                                                         |
| phone                  | number | A number representing the phone number of the customer.                                                  |
| recency                | number | A number representing the recency of the customer.                                                       |
| region                 | string | A string representing the region of the customer. (default: 'IN')                                        |
| NumberofDealsPurchases | number | A number representing the number of deals or purchases made by the customer.                             |
| NumberofWebPurchases   | number | A number representing the number of purchases made by the customer through web.                          |
| NumberofStorePurchases | number | A number representing the number of purchases made by the customer through physical stores.              |
| Customer_For           | number | A number representing the duration of time for which the customer has been associated with the business. |
| Age                    | number | A number representing the age of the customer.                                                           |

### Example

```js copy
{
  name: "John Smith",
  email: "john.smith@example.com",
  phone: 1234567890,
  recency: 30,
  region: "IN",
  NumberofDealsPurchases: 10,
  NumberofWebPurchases: 5,
  NumberofStorePurchases: 5,
  Customer_For: 2,
  Age: 35
}
```
