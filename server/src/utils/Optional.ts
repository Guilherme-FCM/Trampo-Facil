export type Optional<E> = {
  [K in keyof E]?: E[K];
};