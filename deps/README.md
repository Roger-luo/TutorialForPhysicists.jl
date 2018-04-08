# Dependencies

Sometimes, a Julia package has extra dependencies on other languages (like C/C++/Python/etc.) and will have to build those dependencies from source. We usually put their git submodule or download them to the `deps` folder.

## Contents

In this tutorial, I implement a simple multiple dispatch mechanism in plain C. It will help you understand the difference between Julia's Object-Oriented type system and OOP in AOT languages like C++.

You can simply compile **multiple_dispatch.c** with a C complier (like gcc)

```
gcc multiple_dispatch.c -o main
```

and run it, to see what happens

```
./main
```