# Static Coupon Schema

The Static Coupon object has the following properties:

### Data Model

| Attribute    | Type            | Description                                                                                                  |
| ------------ | --------------- | ------------------------------------------------------------------------------------------------------------ |
| couponCode   | String          | A string representing the coupon code.                                                                       |
| creationDate | String          | A string representing the date on which the coupon was created.                                              |
| expiryDate   | String          | A string representing the date on which the coupon will expire.                                              |
| discountType | String          | A string representing the type of discount offered by the coupon (e.g. 'percentage', 'amount', 'free item'). |
| discountAmt  | Number          | A number representing the discount amount, if applicable.                                                    |
| discountPect | Number          | A number representing the discount percentage, if applicable.                                                |
| discountItem | Number          | A number representing the number of items that are discounted, if applicable.                                |
| freeItem     | String          | A string representing the item that is offered for free, if applicable.                                      |
| skuIds       | Array of String | An array of string representing the SKUs that are eligible for the discount.                                 |
| conditions   | Array of String | An array of string representing the conditions that must be met in order to be eligible for the discount.    |
| campaign     | String          | A string representing the marketing campaign associated with the coupon.                                     |
| title        | String          | A string representing the title of the coupon.                                                               |
| desc         | String          | A string representing the description of the coupon.                                                         |
| userLimit    | Number          | A number representing the number of times the coupon can be used by a single user.                           |
| enabled      | Boolean         | A boolean indicating whether the coupon is currently active.                                                 |
| redeemedBy   | Array of String | An array of string representing the users who have already redeemed the coupon.                              |
| format       | String          | A string representing the format of the coupon code.                                                         |

### Example

```js copy
{
  couponCode: "HOT50",
  creationDate: "2023-03-10",
  expiryDate: "2023-04-10",
  discountType: "1",
  discountAmt: 0,
  discountPect: 10,
  discountItem: 0,
  freeItem: "",
  skuIds: ["SKU123", "SKU456"],
  conditions: [{parameter:"payment.amount", compare:"greater", value:"500"}],
  campaign: "Spring Sale",
  title: "10% off your purchase",
  desc: "Get 10% off your purchase of $50 or more with this coupon",
  userLimit: 3,
  enabled: true,
  redeemedBy: ["user123"],
  format: "COUPON-$*$"
}
```
