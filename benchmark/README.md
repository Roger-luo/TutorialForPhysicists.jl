# Benchmarks

We did several benchmarks that related to frequently used operations in quantum physics.


## Tensor Contraction

### Julia


```julia
julia> versioninfo()
Julia Version 0.6.3-pre.0
Commit 93168a6 (2017-12-18 07:11 UTC)
Platform Info:
  OS: Linux (x86_64-linux-gnu)
  CPU: Intel(R) Core(TM) i5-4200M CPU @ 2.50GHz
  WORD_SIZE: 64
  BLAS: libopenblas (USE64BITINT DYNAMIC_ARCH NO_AFFINITY Haswell)
  LAPACK: libopenblas64_
  LIBM: libopenlibm
  LLVM: libLLVM-3.9.1 (ORCJIT, haswell)

julia> using BenchmarkTools

julia> include("einsum.jl")
propagate (generic function with 1 method)

julia> n = 200
200

julia> LHS = randn(n, 10, n); X = randn(n, 2, n); Y = randn(10, 2, 10, 2);

julia> @benchmark propagate($LHS, $X, $Y)
BenchmarkTools.Trial: 
  memory estimate:  27.48 MiB
  allocs estimate:  115
  --------------
  minimum time:     25.286 ms (2.26% GC)
  median time:      25.904 ms (2.22% GC)
  mean time:        26.811 ms (5.16% GC)
  maximum time:     106.110 ms (76.47% GC)
  --------------
  samples:          187
  evals/sample:     1
```

### Python

#### numpy.einsum

```python
In [1]: import numpy as np

In [2]: from einsum import propagate

In [3]: import sys

In [4]: sys.version_info
Out[4]: sys.version_info(major=3, minor=5, micro=2, releaselevel='final', serial=0)

In [5]: sys.version
Out[5]: '3.5.2 (default, Nov 23 2017, 16:37:01) \n[GCC 5.4.0 20160609]'

In [6]: np.__version__
Out[6]: '1.14.2'

In [7]: np.__config__.show()
lapack_opt_info:
    language = c
    define_macros = [('HAVE_CBLAS', None)]
    libraries = ['openblas', 'openblas']
    library_dirs = ['/usr/local/lib']
blas_mkl_info:
  NOT AVAILABLE
openblas_lapack_info:
    language = c
    define_macros = [('HAVE_CBLAS', None)]
    libraries = ['openblas', 'openblas']
    library_dirs = ['/usr/local/lib']
lapack_mkl_info:
  NOT AVAILABLE
blis_info:
  NOT AVAILABLE
openblas_info:
    language = c
    define_macros = [('HAVE_CBLAS', None)]
    libraries = ['openblas', 'openblas']
    library_dirs = ['/usr/local/lib']
blas_opt_info:
    language = c
    define_macros = [('HAVE_CBLAS', None)]
    libraries = ['openblas', 'openblas']
    library_dirs = ['/usr/local/lib']

In [8]: LHS = np.random.randn(200, 10, 200); X = np.random.randn(200, 2, 200); Y
   ...:  = np.random.randn(10, 2, 10, 2);

In [9]: %timeit propagate(LHS, X, Y)
297 ms ± 15.2 ms per loop (mean ± std. dev. of 7 runs, 1 loop each)
```

#### numpy.tensordot

```python
In [1]: import sys, numpy as np

In [2]: from tensordot import propagate

In [3]: sys.version
Out[3]: '3.5.2 (default, Nov 23 2017, 16:37:01) \n[GCC 5.4.0 20160609]'

In [4]: np.__version__
Out[4]: '1.14.2'

In [5]: np.__config__.show()
openblas_info:
    libraries = ['openblas', 'openblas']
    library_dirs = ['/usr/local/lib']
    language = c
    define_macros = [('HAVE_CBLAS', None)]
blis_info:
  NOT AVAILABLE
lapack_opt_info:
    libraries = ['openblas', 'openblas']
    library_dirs = ['/usr/local/lib']
    language = c
    define_macros = [('HAVE_CBLAS', None)]
openblas_lapack_info:
    libraries = ['openblas', 'openblas']
    library_dirs = ['/usr/local/lib']
    language = c
    define_macros = [('HAVE_CBLAS', None)]
blas_mkl_info:
  NOT AVAILABLE
lapack_mkl_info:
  NOT AVAILABLE
blas_opt_info:
    libraries = ['openblas', 'openblas']
    library_dirs = ['/usr/local/lib']
    language = c
    define_macros = [('HAVE_CBLAS', None)]

In [6]: LHS = np.random.randn(200, 10, 200); X = np.random.randn(200, 2, 200); Y
   ...:  = np.random.randn(10, 2, 10, 2);

In [7]: %timeit propagate(LHS, X, Y)
45.1 ms ± 2.71 ms per loop (mean ± std. dev. of 7 runs, 10 loops each)
```

## Memory Allocation

Julia has an 200MB+ overhead for loading LLVM and BLAS into the memory. Therefore, for small tensors, Julia always allocates more. We use the `propagate` function implemented in this repo with the following parameters, this will allocates about 50% of the memory on a 12GB laptop. The results are similar with numpy implementation, they both use up about 51% of the RAM.

```
              total        used        free      shared  buff/cache   available
Mem:       12173840     2559440     8500468      440380     1113932     8852428
Swap:      12455932     2390016    10065916
```

```julia
julia> LHS = randn(5000, 10, 5000); X = randn(5000, 2, 5000); Y = randn(10, 2, 10, 2);
```

## Conclusion

Julia's metaprogramming can provide more efficient tensor contraction by direct code generation.
