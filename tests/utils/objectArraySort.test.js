import getSortedObjectArray from '../../src/utils/objectArraySort';
import {
  originalObject,
  sortedByFirstNameObject,
  sortedByLastNameObject,
  sortedByPhoneObject
} from '../resources/sortedObjects';

describe('utils/objectArraySort', () => {
  it('should return sorted by firstName Object', () => {
    const sortedObject = getSortedObjectArray(originalObject, 'firstName', 'asc');
    expect(sortedObject).toEqual(sortedByFirstNameObject);
  });

  it('should return sorted by lastName Object', () => {
    const sortedObject = getSortedObjectArray(originalObject, 'firstName', 'asc');
    expect(sortedObject).toEqual(sortedByLastNameObject);
  });

  it('should return sorted by Phone Object', () => {
    const sortedObject = getSortedObjectArray(originalObject, 'firstName', 'asc');
    expect(sortedObject).toEqual(sortedByPhoneObject);
  });
});
