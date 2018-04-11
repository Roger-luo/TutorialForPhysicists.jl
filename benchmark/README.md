# Benchmarks

We did several benchmarks that related to frequently used operations in quantum physics.


## Tensor Contraction

### Julia

```
LHS = randn(n, 10, n); X = randn(n, 2, n); Y = randn(10, 2, 10, 2);
```

n = 100
Maximum resident set size (kbytes): 230008
n = 150
Maximum resident set size (kbytes): 258848
n = 200
Maximum resident set size (kbytes): 262628
n = 250
Maximum resident set size (kbytes): 349628
n = 300
Maximum resident set size (kbytes): 332672
n = 400
Maximum resident set size (kbytes): 466380

**Python**

```
Python 3.5.2 (default, Nov 23 2017, 16:37:01) 
Type 'copyright', 'credits' or 'license' for more information
IPython 6.3.1 -- An enhanced Interactive Python. Type '?' for help.

In [1]: from einsum import propagate

In [2]: import numpy as np

In [3]: np.__version__
Out[3]: '1.14.2'

In [4]:     LHS = np.random.randn(200, 10, 200)
   ...:     X = np.random.randn(200, 2, 200)
   ...:     Y = np.random.randn(10, 2, 10, 2)
   ...: 
   ...: 

In [5]: %timeit propagate(LHS, X, Y)
326 ms ± 20.2 ms per loop (mean ± std. dev. of 7 runs, 1 loop each)
```

**Julia**

```julia-repl
julia> include("einsum.jl")
propagate (generic function with 1 method)

julia> using BenchmarkTools

julia> LHS = randn(200, 10, 200); X = randn(200, 2, 200); Y = randn(10, 2, 10, 2);

julia> @benchmark propagate(LHS, X, Y)
BenchmarkTools.Trial: 
  memory estimate:  27.48 MiB
  allocs estimate:  115
  --------------
  minimum time:     23.645 ms (2.11% GC)
  median time:      24.593 ms (1.99% GC)
  mean time:        25.365 ms (4.54% GC)
  maximum time:     101.740 ms (75.41% GC)
  --------------
  samples:          197
  evals/sample:     1
```


```
(julia-stable) ➜  benchmark git:(master) ✗ /usr/bin/time --verbose python einsum.py 
Python version: 3.5.2 (default, Nov 23 2017, 16:37:01) 
[GCC 5.4.0 20160609]
numpy version: 1.14.2
	Command being timed: "python einsum.py"
	User time (seconds): 30.05
	System time (seconds): 0.71
	Percent of CPU this job got: 100%
	Elapsed (wall clock) time (h:mm:ss or m:ss): 0:30.46
	Average shared text size (kbytes): 0
	Average unshared data size (kbytes): 0
	Average stack size (kbytes): 0
	Average total size (kbytes): 0
	Maximum resident set size (kbytes): 46580
	Average resident set size (kbytes): 0
	Major (requiring I/O) page faults: 0
	Minor (reclaiming a frame) page faults: 393828
	Voluntary context switches: 12
	Involuntary context switches: 282
	Swaps: 0
	File system inputs: 0
	File system outputs: 0
	Socket messages sent: 0
	Socket messages received: 0
	Signals delivered: 0
	Page size (bytes): 4096
	Exit status: 0

```

## Kronecker Product

100x100 sparsity 0.1

python: 5ms
julia: 3.38ms
