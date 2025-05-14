declare type Split<
  T extends string,
  S extends string = ","
> = T extends `${infer L}${S}${infer Rest}`
  ? L extends ""
    ? Split<Rest, S>
    : L | Split<Rest, S>
  : ExcludeEmpty<T>;

type TestSplitMustBeCorrect = AssertEqual<
  Split<"a,b,c">,
  "a" | "b" | "c"
>;

type TestSplitMustReturnUniqueType = AssertEqual<
  Split<"b,a,b,a">,
  "a" | "b"
>;

type TestShouldBeSkipEmptyName = AssertEqual<Split<"a,">, "a">;
type TestShouldBeSkipEmptyName2 = AssertEqual<Split<"a,b,">, "a" | "b">;
type TestShouldBeSkipEmptyName3 = AssertEqual<
  Split<",a,b,c">,
  "a" | "b" | "c"
>;
type TestShouldBeSkipEmptyName4 = AssertEqual<
  Split<"a,b,c,">,
  "a" | "b" | "c"
>;
type TestShouldBeSkipEmptyName5 = AssertEqual<
  Split<",a,b,c,">,
  "a" | "b" | "c"
>;
type TestShouldBeSkipEmptyName6 = AssertEqual<
  Split<",a,b,d,e,e,a,c,">,
  "a" | "b" | "c" | "d" | "e"
>;

type TestSplitWithCommaSeparator = AssertEqual<
  Split<"a.b.c", ".">,
  "a" | "b" | "c"
>;

type TestSplitWithSpaceSeparator = AssertEqual<
  Split<"a b c", " ">,
  "a" | "b" | "c"
>;


