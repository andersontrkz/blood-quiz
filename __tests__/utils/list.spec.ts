import { shuffledList } from '@/app/utils/list';

describe('shuffledList', () => {
  it('should return a list with the same length as the original list', () => {
    const originalList = [1, 2, 3, 4, 5];
    const shuffled = shuffledList(originalList);
    
    expect(shuffled.length).toBe(originalList.length);
  });

  it('should not return the same list as the original list', () => {
    const originalList = [1, 2, 3, 4, 5];
    const shuffled = shuffledList(originalList);
    
    expect(shuffled).not.toEqual(originalList);
  });

  it('should handle an empty list correctly', () => {
    const originalList: number[] = [];
    const shuffled = shuffledList(originalList);
    
    expect(shuffled).toEqual(originalList);
  });

  it('should handle a single-item list correctly', () => {
    const originalList = [1];
    const shuffled = shuffledList(originalList);
    
    expect(shuffled).toEqual(originalList);
  });

  it('should handle a list with duplicate items', () => {
    const originalList = [1, 1, 2, 2, 3, 3];
    const shuffled = shuffledList(originalList);
    
    expect(shuffled.length).toBe(originalList.length);
    expect(shuffled).not.toEqual(originalList);
  });

  it('should shuffle list of strings correctly', () => {
    const originalList = ['a', 'b', 'c', 'd'];
    const shuffled = shuffledList(originalList);
    
    expect(shuffled.length).toBe(originalList.length);
    expect(shuffled).not.toEqual(originalList);
  });

  it('should shuffle list of objects correctly', () => {
    const originalList = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const shuffled = shuffledList(originalList);
    
    expect(shuffled.length).toBe(originalList.length);
    expect(shuffled).not.toEqual(originalList);
  });

  it('should produce a shuffled list with different order on subsequent calls', () => {
    const originalList = [1, 2, 3, 4, 5];
    const shuffled1 = shuffledList(originalList);
    const shuffled2 = shuffledList(originalList);
    
    expect(shuffled1).not.toEqual(shuffled2);
  });

  it('should shuffle list of numbers with negative values correctly', () => {
    const originalList = [-1, -2, -3, -4];
    const shuffled = shuffledList(originalList);
    
    expect(shuffled.length).toBe(originalList.length);
    expect(shuffled).not.toEqual(originalList);
  });
});
