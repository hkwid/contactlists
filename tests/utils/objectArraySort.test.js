import getSortedObjectArray from '../../src/utils/objectArraySort';
import {
  originalObject,
  sortedByFirstNameObject,
  sortedByLastNameObject,
  sortedByPhoneObject,
  sortedByAddressObject,
  sortedByEmailObject
} from '../resources/sortedObjects';

describe('utils/objectArraySort', () => {
  it('should return sorted by firstName Object', () => {
    const sortedObject = getSortedObjectArray(originalObject, 'firstName', 'asc');
    expect(sortedObject).toEqual(sortedByFirstNameObject);
  });

  it('should return sorted by lastName Object', () => {
    const sortedObject = getSortedObjectArray(originalObject, 'lastName', 'asc');
    expect(sortedObject).toEqual(sortedByLastNameObject);
  });

  it('should return sorted by phone Object', () => {
    const sortedObject = getSortedObjectArray(originalObject, 'phone', 'asc');
    expect(sortedObject).toEqual(sortedByPhoneObject);
  });

  it('should return sorted by address Object', () => {
    const sortedObject = getSortedObjectArray(originalObject, 'address', 'asc');
    expect(sortedObject).toEqual(sortedByAddressObject);
  });

  it('should return sorted by email Object', () => {
    const sortedObject = getSortedObjectArray(originalObject, 'email', 'asc');
    expect(sortedObject).toEqual(sortedByEmailObject);
  });
});
