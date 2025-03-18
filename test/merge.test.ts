import { describe, test, expect } from '@jest/globals';
import { add, merge } from "../src/merge";


describe('Merge function', () => {
    it('should merge sorted arrays in ascending order', () => {
      const collection_1 = [1, 3, 5, 7];
      const collection_2 = [2, 4, 6, 8];
      const collection_3 = [9, 7, 5, 3];
  
      const result = merge(collection_1, collection_2, collection_3);
      
      expect(result).toEqual([1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9]);
    });
  
    it('should handle empty arrays', () => {
      const collection_1: number[] = [];
      const collection_2: number[] = [];
      const collection_3: number[] = [];
  
      const result = merge(collection_1, collection_2, collection_3);
      
      expect(result).toEqual([]);
    });
  
    it('should merge arrays with duplicates', () => {
      const collection_1 = [1, 2, 2, 3];
      const collection_2 = [2, 3, 4];
      const collection_3 = [5, 3, 1];
  
      const result = merge(collection_1, collection_2, collection_3);
      
      expect(result).toEqual([1, 1, 2, 2, 2, 3, 3, 3, 4, 5]);
    });
  });