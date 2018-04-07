# Why choose Julia

Before you start to learn Julia, I have some personal suggestions and experience to share.

There are plenty of languages that is able to do numerical computing well but why do you choose Julia? This is a frequently asked questions. Usually, people cannot understand why we choose Julia rather than Python, MATLAB, Lua, Lisp, C/C++ or the new comers like Rust/Go.

They are great languages indeed, and in fact, I have been a heavy user in using Python and C/C++ for deep learning and quantum physics during 2016-2018. But I found that things were not what I expected. As an researcher in quantum physics, I would like to focus more on algorithms and theories rather than High Performance Computing (HPC) and compiler optimizations.

## Quoting Others' Comments

There were a lot discussions about the motivation of Julia and here is some selected opinions about the motivation:

From **Kristoffer Carlsson**:

> This is pretty good reading:  [Personal Thoughts about PyStons Outcome](http://blog.kevmod.com/2017/02/personal-thoughts-about-pystons-outcome/644)

> "The thing I wish people understood about Python performance is that the difficulties come from Python’s extremely rich object model, not from anything about its dynamic scopes or dynamic types. The problem is that every operation in Python will typically have multiple points at which the user can override the behavior, and these features are used, often very extensively. Some examples are inspecting the locals of a frame after the frame has exited, mutating functions in-place, or even something as banal as overriding isinstance. "

> Sure you can make Python fast in some cases where you use a small subset of the language. However, Python as a whole is extremely difficult to make fast because of the incredible freedom you have. The “compiler” can assume very little, so it is difficult to generate efficient code. Just consider the incredible amount of time and money that has been spent on trying to make it faster and the relatively mediocre success it has had (Pyston, Numba, PyPy etc).

From **Rdeits**

> Another piece of the “why Julia” puzzle is the fact that Julia does not treat a specific set of built-in types differently. That is, I can make my own type or immutable that can do anything that Julia’s built-in types can do, and my type can be just as fast as the one provided with Julia (if I were as skilled at numerical computing as the devs, which I am not). This isn’t just a nice feature; it’s essential to making things like [automatic differentiation](https://github.com/JuliaDiff/ForwardDiff.jl) and other [numeric types](https://github.com/JuliaMath/FixedPointNumbers.jl) fast and easy to use. It’s also why we have really nice abstractions like the idea that an [image](https://github.com/JuliaImages/Images.jl) is not a matrix of doubles or bytes but instead a matrix of colors. That works because Julia lets us define a whole family of [color-related datatypes](https://github.com/JuliaGraphics/ColorTypes.jl) which provide useful behavior and abstraction at little or no run-time cost. That’s been the biggest benefit of Julia, in my experience.

From **Tem_PI**:

> I think Julia’s advantage is some synergy between its type system, fast code on custom types and new abstractions, syntax, multiple dispatch, macros etc

> Thus, its not just fast on specific types of code, but allows for unparalleled flexibility, code reuse, expression of ideas and abstractions, higher order programming etc in a way that makes numba and python seem stone age.

> Here is a concrete elucidating example of something that wouldn’t be possible in python: http://www.stochasticlifestyle.com/6-months-differentialequations-jl-going/

**Blogs**:

- [Why Julia](http://ucidatascienceinitiative.github.io/IntroToJulia/Html/WhyJulia)

## Good Performance

Firstly, languages like Python, C/C++ were designed for general purpose rather than **Scientific Computing**, and as a heavy user of Python, I found it is very convenient, flexible and productive if what you are working on have already provide python wrappers. 

For example, for web services, we have great frameworkss like: 
- [Django](https://github.com/django/django)
- [Flask](https://github.com/pallets/flask) 
- etc. 

For general purpose **linear algebra** and **scientific computing**, we have

- [numpy](https://github.com/numpy/numpy)
- [scipy](https://github.com/scipy/scipy)
- [pandas](https://github.com/pandas-dev/pandas)
- etc.

And in recent years, the bloom of **deep learning** is based on a number of deep learning frameworks that provides Python wrappers: 

- [TensorFlow](https://github.com/tensorflow/tensorflow)
- [PyTorch](https://github.com/pytorch/pytorch)
- [MXNet](https://github.com/apache/incubator-mxnet)
- etc.

Moreover, in the field of quantum physics and quantum chemistry, we have

- [PySCF](https://github.com/sunqm/pyscf)
- [Project Q](https://github.com/ProjectQ-Framework/ProjectQ)
- [OpenFermion](https://github.com/quantumlib/OpenFermion)
- [QuTiP](https://github.com/qutip/qutip)

However, Python is only an wrapper in most packages above, and for projects written mainly in Python like **Project Q** have been sufferring performance issue.

```shell
# projectq & scipy benchmark 6 bit time evolution, QAOA algorithm.
projectq 19.45s user 0.72s system 100% cpu 20.173 total
scipy  10.68s user 0.13s system 100% cpu 10.813 total
```

This is because the dynamical feature of Python itself provides you its simple and flexible experience but costs extra overhead on its performance and make the language itself hard to optimize. You cannot write a performance-expensive function in pure Python. However, most researchers in the field of Physics do have the time and should not need to learn how to write C/C++ programs for Python. 

To overcome this performance issue and let research users focus on what they should focus on, developers usually have the following options:

- write a backend in pure C/C++ and bind it to Python with C API (You can use [pybind11](https://github.com/pybind/pybind11) now) or for small projects there is [cffi](https://cffi.readthedocs.io/en/latest/)
- rewrite part of the code in [Cython](http://cython.org/) as a subset of the language
- use JIT compilers like: [numba](https://numba.pydata.org/)


Even with **numpy** and **scipy**, in the field of quanutm physics, the performance is still not enough, especially when you have a lot **for** loops and complex data structure and abstractions.

Comparing to dynamic langauges (like Python, LuaJIT), Julia has a fair performance, there are several benchmarks that can demonstrate this:

- The official benchmark [julialang.org](https://julialang.org)
- LU Factorization benchmark [A Speed Comparison of C, Julia, Python, Numba and Cython on LU Factorization](https://www.ibm.com/developerworks/community/blogs/jfp/entry/A_Comparison_Of_C_Julia_Python_Numba_Cython_Scipy_and_BLAS_on_LU_Factorization?lang=en)
- [Basic Comparison of Python, Julia, R, Matlab and IDL](https://modelingguru.nasa.gov/docs/DOC-2625)
- [Cystal language benchmark](http://blog.seraum.com/crystal-lang-vs-nodejs-vs-golang-vs-julia-vs-rust-vs-luajit-vs-c-fibonacci-benchmark)
- [Micro-Benchmarking Julia, C++ and Pythran on an Economics kernel](http://serge-sans-paille.github.io/pythran-stories/micro-benchmarking-julia-c-and-pythran-on-an-economics-kernel.html)
- [Fun With Just-In-Time Compiling: Julia, Python, R and pqR](http://randyzwitch.com/python-pypy-julia-r-pqr-jit-just-in-time-compiler/)


## Awesome Foreign Function Interface (FFI)

Julia has an awesome FFI that allows us make use of historial programs without a lot extra efforts. And we can always optimize our Julia code easily with C/C++/Fortran.

#### C/Fortran

You can directly call C/Fortran libraries from Julia itself without any wrapper, libraries being loaded, and there is no extra C APIs to learn (although Julia has C APIs indeed).

#### C++

You can directly call C++ class by [Cxx.jl](https://github.com/Keno/Cxx.jl) and import your C++ objects and functions directly by include header files rather than writing glue codes or expose to C APIs. Moreover, you can even run Cxx code by import them as strings.

#### Python

You can directly import arbitrary Python modules by [PyCall.jl](https://github.com/JuliaPy/PyCall.jl) and call Python functions (with automatic conversion of types between Julia and Python), define Python classes from Julia methods, and share large data structures between Julia and Python without copying them.

```julia
using PyCall
@pyimport math
math.sin(math.pi / 4) - sin(pi / 4)  # returns 0.0
```

#### MATLAB

You can directly read MATLAB scripts with [MAT.jl](https://github.com/JuliaIO/MAT.jl) or you can just call MATLAB engine from Julia with [MATLAB.jl](https://github.com/JuliaInterop/MATLAB.jl)

## Powerful Metaprogramming

Julia inherit the this powerful legacy from Lisp. It can process its own program with its the langauge itself. Which makes it becomes extremely easy to write Domain Specific Languages (DSL), and do code generation, there are some packages that could demonstrate these features:

- [JuMP](https://github.com/JuliaOpt/JuMP.jl) DSL for Mathematical Optimization
- [AutoDiffSource](https://github.com/gaika/AutoDiffSource.jl) Automatic differentiation with source code transformation.
- [TensorOperations.jl](https://github.com/Jutho/TensorOperations.jl) tensor contraction and related operations

## Designed for Scientific Computing

But I'm not saying Python is not good, as a famous saying:

[**No Silver Bullet**](http://worrydream.com/refs/Brooks-NoSilverBullet.pdf)

Python is not designed for scientific tasks and therefore it won't be as convenient as languages designed for these tasks under certain circumstances. In fact, Julia's amazing performance is not magic, it is mainly because of its language design, it is design for science rather than web service (nodejs/PHP/etc.), games (C/C++/Lua/etc.) or servers(bash/awk/etc.).

It will be extremely hard to implement similar functionalities in Python when a Python class is inside a loop, and it is difficult/impossible to get user defined objects in things like Numba, while Julia's user defined types are as fast as builtins.

You might find that you need to consider something more in Julia including types, abstractions and etc. But remember there is **no silver bullet**, when you need to improve performance in Python, what you benefit from will become obstacles.
