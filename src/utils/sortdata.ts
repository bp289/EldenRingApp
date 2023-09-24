import {Page} from '../types/pages';

export interface Section {
  title: string;
  data: SectionItem[];
}

export interface SectionItem {
  __typename: string;
  id: string;
  image: string;
  name: string;
}

export function sortData(input: SectionItem[]): Array<Section> {
  const result: Section[] = [];

  input.forEach(entry => {
    const found = result.find(element => element.title === entry.name[0]);
    if (!found) {
      const section: Section = {title: entry.name[0], data: []};
      section.data.push(entry);
      result.push(section);
    } else if (found) {
      result[result.indexOf(found!)].data.push(entry);
    }
  });
  result.sort((a, b) => a.title.localeCompare(b.title));

  return result;
}

export const isInArray = (myArray: Page[], objectToFind: Page): boolean => {
  return myArray.some(obj => {
    return (
      obj.id === objectToFind.id &&
      obj.name === objectToFind.name &&
      obj.__typename === objectToFind.__typename
    );
  });
};
