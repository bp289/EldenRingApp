export interface section {
  title: string;
  data: Array<entityInfo>;
}

export interface entityInfo {
  __typename: string;
  id: string;
  image: string;
  name: string;
}

export function sortData(input: Array<entityInfo>): Array<section> {
  const result = [] as section[];

  input.forEach(entry => {
    const found = result.find(element => element.title === entry.name[0]);
    if (!found) {
      const section: section = {title: entry.name[0], data: []};
      section.data.push(entry);
      result.push(section);
    } else if (found) {
      result[result.indexOf(found!)].data.push(entry);
    }
  });

  return result;
}
