export const algorithms = [
  'Bubble Sort',
  'Quick Sort',
  'Merge Sort',
  'Insertion Sort',
  'Selection Sort',
  'Heap Sort',
  'Tim Sort',
  'Radix Sort',
  'Shell Sort',
  'Cycle Sort',
  'Odd Even Sort',
  'Cocktail Sort',
] as const;

export type TAlgorithm = (typeof algorithms)[number];
