/*
 Author: MECHREVO
 Create Time: 2021-01-02 12:17
 Description:
*/

const typeCache: { [type: string]: boolean} = {};
export const type = (label: string): string => {
  if (typeCache[label]) {
    throw new Error('Action type "${label}" is not unique');
  }
  typeCache[label] = true;

  return label;
}
