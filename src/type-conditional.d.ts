declare type If<C extends boolean, T, F> = C extends true ? T : F;
declare type IsExtend<X, Y> = X extends Y ? true : false;

declare type Equal<X, Y> = 
  (<T>() => If<IsExtend<T,X>,1,2>) extends
  (<T>() => If<IsExtend<T,Y>,1,2>) ? true : false;

type TestShouldBeNotEqual = AssertEqual<Equal<"b", "a">, false>;
type TestShouldBeEqual = AssertEqual<Equal<"b", "b">, true>;