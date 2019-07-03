import _ from "lodash";

export function paginate(items, pageNember, pageSize) {
  const startIndex = (pageNember - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
