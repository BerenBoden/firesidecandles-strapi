"use strict";
const { yup, validateYupSchema } = require("@strapi/utils");
const callbackBodySchema = yup.object().shape({
  identifier: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});
module.exports = {
  validateCallbackBody: validateYupSchema(callbackBodySchema),
};
