# Getting Started

Our Coupon Vault API allows you to create, update, delete, and list both static and dynamic coupon codes, as well as manage campaigns and add coupons to campaigns. Follow the steps below to get started:

1. Sign up for an API key:

    > To access the Coupon Management API, you will need an API key. You can sign up for an API key by contacting our support team at support@couponvaultapi.com.

2. Installation:

> Our API can be accessed through HTTP requests. To make requests, you can use any programming language or tool that can make HTTP requests, such as cURL, Postman, or Python's Requests library.

3. Authentication:

> To authenticate your API requests, you will need to include your API key in the request headers. The header should be named Authorization and the value should be Bearer **<YOUR_API_KEY>**.

> Example Header: `Authorization: Bearer abcdefghijklmnopqrstuvwxyz0123456789`

4. Endpoints:

> Our API has the following endpoints:

> **/coupon**: This endpoint allows you to create, update, delete, and list both static and dynamic coupons. It accepts POST, GET, PUT, and DELETE requests.

> **/campaign**: This endpoint allows you to create, update, and list campaigns. It accepts POST, GET, and PUT requests.

> **/campaign/coupon**: This endpoint allows you to add coupons to a campaign. It accepts POST requests.

**_For more details on each endpoint and its parameters, please refer to our API documentation._**
