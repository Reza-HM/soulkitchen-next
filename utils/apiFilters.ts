import { Document, Model, Query } from "mongoose";

interface QueryString {
  keyword?: string;
  page?: string;
  [key: string]: string | undefined;
}

class APIFilters<T extends Document, U extends Model<T>> {
  query: Query<T[], T, U>;
  queryStr: QueryString;

  constructor(query: Query<T[], T, U>, queryStr: QueryString) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search(): this {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter(): this {
    const queryCopy: QueryString = { ...this.queryStr };

    const removeFields = ["keyword", "page"];
    removeFields.forEach((el) => delete queryCopy[el]);

    let output: Record<string, any> = {};
    let prop = "";

    for (let key in queryCopy) {
      if (!key.match(/\b(gt|gte|lt|lte)/)) {
        output[key] = queryCopy[key];
      } else {
        prop = key.split("[")[0];

        let operatorMatch = key.match(/\[(.*)\]/);
        let operator = operatorMatch ? operatorMatch[1] : null;

        if (!output[prop]) {
          output[prop] = {};
        }

        output[prop][`$${operator}`] = queryCopy[key];
      }
    }

    this.query = this.query.find(output);
    return this;
  }

  pagination(resPerPage: number): this {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    this.query = this.query.limit(resPerPage).skip(skip);
    return this;
  }
}

export default APIFilters;
