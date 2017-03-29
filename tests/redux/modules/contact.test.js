import reducer, { initialState} from '../../../src/redux/modules/contact';

describe('contact.js/reducer' , () => {
  it('should return unchanged state if action type is unrecognized', () => {
    const stateData = initialState;
    const action = { type: 'UNRECOGNIZED_ACTION' };
    const newState = reducer(stateData, action);
    expect(newState).toEqual(stateData);
  });

  it('should set default value if no state and unrecognized action given', () => {
    const action = { type: 'UNRECOGNIZED_ACTION' };
    const newState = reducer(undefined, action);
    expect(newState).toBe(initialState);
  });

});
