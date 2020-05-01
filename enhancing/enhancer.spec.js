/* eslint-disable no-undef */
const { repair, succeed, fail } = require('./enhancer.js');

describe('enhancer.js', () => {
  // Repair
  describe('repair()', () => {
    it('change item durability to 100', () => {
      const item = {
        name: 'sword',
        durability: 27,
        enhancement: 10,
      };
      const expected = {
        name: 'sword',
        durability: 100,
        enhancement: 10,
      };
      const repairedItem = repair(item);
      expect(repairedItem).toEqual(expected);
    });
    it('original item not changed after repair', () => {
      const item = {
        name: 'sword',
        durability: 27,
        enhancement: 10,
      };
      const expected = {
        name: 'sword',
        durability: 27,
        enhancement: 10,
      };
      repair(item);
      expect(item).toEqual(expected);
    });
  });
  // Succeed
  describe('succeed()', () => {
    it('increase enhancement by 1', () => {
      const item = {
        name: 'dagger',
        durability: 70,
        enhancement: 11,
      };
      const expected = {
        name: 'dagger',
        durability: 70,
        enhancement: 12,
      };
      const enhancedItem = succeed(item);
      expect(enhancedItem).toEqual(expected);
    });
    it('original item not changed after enhance', () => {
      const item = {
        name: 'dagger',
        durability: 70,
        enhancement: 11,
      };
      const expected = {
        name: 'dagger',
        durability: 70,
        enhancement: 11,
      };
      succeed(item);
      expect(item).toEqual(expected);
    });
  });
  // Fail
  describe('fail()', () => {
    it('if enhancement less than 15, decrease durability by 5', () => {
      const item = {
        name: 'axe',
        durability: 70,
        enhancement: 10,
      };
      const expected = {
        name: 'axe',
        durability: 65,
        enhancement: 10,
      };
      const failedItem = fail(item);
      expect(failedItem).toEqual(expected);
    });
    it('original item not changed after decrease durability by 5', () => {
      const item = {
        name: 'axe',
        durability: 70,
        enhancement: 10,
      };
      const expected = {
        name: 'axe',
        durability: 70,
        enhancement: 10,
      };
      fail(item);
      expect(item).toEqual(expected);
    });
    it('if enhancement greater than or equal 15, decrease durability by 10', () => {
      const item = {
        name: 'axe',
        durability: 70,
        enhancement: 15,
      };
      const expected = {
        name: 'axe',
        durability: 60,
        enhancement: 15,
      };
      const failedItem = fail(item);
      expect(failedItem).toEqual(expected);
    });
    it('original item not changed after decrease durability by 10', () => {
      const item = {
        name: 'axe',
        durability: 70,
        enhancement: 15,
      };
      const expected = {
        name: 'axe',
        durability: 70,
        enhancement: 15,
      };
      fail(item);
      expect(item).toEqual(expected);
    });
    it('if enhancement greater than 16, decrease durability by 10 and enhancement by 1', () => {
      const item = {
        name: 'axe',
        durability: 70,
        enhancement: 17,
      };
      const expected = {
        name: 'axe',
        durability: 60,
        enhancement: 16,
      };
      const failedItem = fail(item);
      expect(failedItem).toEqual(expected);
    });
    it('original item not changed after decrease durability by 10 and enhancement by 1', () => {
      const item = {
        name: 'axe',
        durability: 70,
        enhancement: 17,
      };
      const expected = {
        name: 'axe',
        durability: 70,
        enhancement: 17,
      };
      fail(item);
      expect(item).toEqual(expected);
    });
  });
});
