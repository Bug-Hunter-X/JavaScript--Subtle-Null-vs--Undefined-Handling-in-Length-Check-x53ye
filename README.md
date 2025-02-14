# JavaScript: Subtle Null vs Undefined Handling in Length Check

This repository demonstrates a common, yet subtle, bug in JavaScript related to handling null and undefined values when checking the length of an object.  The original code incorrectly handles null values, leading to unexpected behavior.

## Bug Description

The `foo` function aims to return the length of an object 'a'. If 'a' is null, it should return 0. However, the code only explicitly checks for null, resulting in a `TypeError` if 'a' is undefined.

## Solution

The solution involves explicitly checking for both null and undefined values using the strict equality operator (`===`) to ensure the function behaves as expected in all cases.