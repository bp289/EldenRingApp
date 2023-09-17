import type {categories, ListItemType} from '../types/pages';
export default function groupCategories(data: Array<ListItemType>): categories {
  const result: categories = {};
  data.forEach(entry => {
    const currentCategory = entry.category;
    if (!result[currentCategory]) {
      result[currentCategory] = [];
    }
    result[currentCategory].push(entry);
  });

  return result;
}
