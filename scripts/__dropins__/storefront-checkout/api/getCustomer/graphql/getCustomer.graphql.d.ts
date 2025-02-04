/********************************************************************
* ADOBE CONFIDENTIAL
* __________________
*
*  Copyright 2024 Adobe
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
*******************************************************************/
export declare const getCustomerQuery = "\n  query getCustomer {\n    customer {\n      firstname\n      lastname\n      email\n      addresses {\n        id\n        default_shipping\n        default_billing\n        city\n        country_code\n        firstname\n        lastname\n        company\n        postcode\n        vat_id\n        region {\n          region\n          region_id\n          region_code\n        }\n        street\n        telephone\n        custom_attributesV2 {\n          ... on AttributeValue {\n            code\n            value\n          }\n        }\n      }\n    }\n  }\n";
//# sourceMappingURL=getCustomer.graphql.d.ts.map