declare type If<C extends boolean, T, F> = C extends true ? T : F;

declare type Equal<X, Y> = 
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;

type TestShouldBeNotEqual = AssertEqual<Equal<"b", "a">, false>;
type TestShouldBeEqual = AssertEqual<Equal<"b", "b">, true>;
type TestShouldBeObjectEqual = AssertEqual<Equal<{a: "b", b: "c"}, {a: "b", b: "c"}>, true>;
type TestShouldBeNotEqual2 = AssertNot<Equal<{"hello": "world"}, "c">>;
type TestShouldBeObjectNotEqual = AssertNot<Equal<{a: "b", b: "c"}, {a: "b"}>>;