"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async findOne(ctx) {
    const { id: slug } = ctx.params;
    const { query } = ctx;
    if (!query.filters) query.filters = {};
    query.filters.slug = { $eq: slug };
    const entity = await strapi.service("api::product.product").find(query);
    const { results } = await this.sanitizeOutput(entity, ctx);

    results.forEach((result) => {
      delete result.updatedBy;
      delete result.createdBy;
    });

    return this.transformResponse(results[0]);
  },
}));
