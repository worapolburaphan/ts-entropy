/**
 * Type assertion utility for checking if a type is work fine
 */
declare type AssertEqual<T extends V, V extends any> = true
declare type AssertNot<T extends false> = true
