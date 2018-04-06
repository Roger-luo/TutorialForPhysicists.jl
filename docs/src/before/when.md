# When choose Julia

As we priviously mentioned, Julia is not magic and there is **no silver bullet**, we have to choose our language for certain problems, here are some suggestions:

## When you need Julia

- Choose Julia, if you usually need to optimize Python with C/C++/Fortran/etc.
- Choose Julia, if your problem requires a lot abstractions but also sensitive to performance.
- Choose Julia, if your interface will looks better with a DSL, or some addons on its original language. (like einsum for tensor contraction)
- Your collaborator or supervisor use Julia.


## When you don't need Julia

- Your program is heavily based on pure Python and its packages (like Pytorch, MXNet, TensorFlow, etc.), and there is no better or equivalent Julia packages.
- You don't care performance very much at the moment, about 5x slower is acceptable. (tasks like GUI, plotting, etc.)
- Your collaborator or supervisor do not accept new language.
