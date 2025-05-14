/**
 * Type assertion utility for checking type is empty
 *
 * @example
 * ExcludeEmpty<""> // never;
 * ExcludeEmpty<"a"> // "a";
 * ExcludeEmpty<0> // never;
 * ExcludeEmpty<0 | "a"> // "a";
 * ExcludeEmpty<null> // never;
 * ExcludeEmpty<undefined> // never;
 * ExcludeEmpty<0 | null | undefined> // never;
 * ExcludeEmpty<0 | null | undefined | "a"> // "a";
 */
declare type ExcludeEmpty<T> = T extends "" | null | undefined | 0 ? never : T;

type TestNeverEmptyMustBeCorrect = AssertEqual<ExcludeEmpty<"">, never>;
type TestNeverEmptyMustBeCorrect2 = AssertEqual<ExcludeEmpty<"a">, "a">;
type TestNeverEmptyMustBeCorrect3 = AssertEqual<ExcludeEmpty<0>, never>;
type TestNeverEmptyMustBeCorrect4 = AssertNot<Equal<ExcludeEmpty<0 | "a">, 0 | "a">>;
type TestNeverEmptyMustBeCorrect5 = AssertEqual<ExcludeEmpty<null>, never>;
type TestNeverEmptyMustBeCorrect6 = AssertEqual<ExcludeEmpty<undefined>, never>;
type TestNeverEmptyMustBeCorrect7 = AssertEqual<ExcludeEmpty<0 | null | undefined>, never>;
type TestNeverEmptyMustBeCorrect8 = AssertEqual<ExcludeEmpty<0 | null | undefined | "a">, "a">;
