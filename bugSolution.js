function foo(a) {
  if (a === null || a === undefined) {
    return 0;
  }
  return a.length;
}