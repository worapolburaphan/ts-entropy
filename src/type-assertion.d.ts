/**
 * Type assertion utility for checking if a type is work fine
 */

declare type AssertEqual<
  T,
  V extends (<T>() => T extends V ? 1 : 2) extends <V>() => V extends T ? 1 : 2
    ? T
    : never
> = V

declare type AssertNot<T extends false> = T
declare type AssertTrue<T extends true> = T
