declare type DotSeparate<T extends string> =
  T extends `${infer L}.${infer Rest}`
    ? L extends ""
      ? DotSeparate<Rest>
      : L | DotSeparate<Rest>
    : ExcludeEmpty<T>;

type TestDotSeparateMustBeCorrect = AssertEqual<
  DotSeparate<"a.b.c">,
  "a" | "b" | "c"
>;

type TestDotSeparateMustReturnUniqueType = AssertEqual<
  DotSeparate<"b.a.b.a">,
  "a" | "b"
>;

type TestShouldBeSkipEmptyName = AssertEqual<DotSeparate<"a..">, "a">;
type TestShouldBeSkipEmptyName2 = AssertEqual<DotSeparate<"a.b..">, "a" | "b">;
type TestShouldBeSkipEmptyName3 = AssertEqual<
  DotSeparate<"..a.b.c">,
  "a" | "b" | "c"
>;
type TestShouldBeSkipEmptyName4 = AssertEqual<
  DotSeparate<"a.b.c..">,
  "a" | "b" | "c"
>;
type TestShouldBeSkipEmptyName5 = AssertEqual<
  DotSeparate<".a..b.c.">,
  "a" | "b" | "c"
>;
type TestShouldBeSkipEmptyName6 = AssertEqual<
  DotSeparate<".a.b...d.e.e.a.c..">,
  "a" | "b" | "c" | "d" | "e"
>;
