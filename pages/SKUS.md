# SKU Schema

A SKU object represents a stock-keeping unit which is a unique identifier assigned to a product in a store's inventory management system. It contains information about the product, such as its name, cost, and category.

### Data Model

| Attribute | Type    | Description                                                 |
| --------- | ------- | ----------------------------------------------------------- |
| skuId     | String  | The unique identifier for the SKU.                          |
| name      | String  | The name of the product associated with the SKU.            |
| cost      | Number  | The cost of the product associated with the SKU.            |
| category  | String  | The category of the product associated with the SKU.        |
| enabled   | Boolean | Indicates whether the SKU is currently enabled or disabled. |

### Example

```js copy
{
  skuId: "102",
  name: "Carrots",
  cost: 30,
  category: "Vegitables",
  enabled: true
}
```

### Summary

This example represents a SKU for a pair of Nike Air Max shoes, with a cost of $99.99 and belonging to the "Shoes" category. The SKU is currently enabled.
