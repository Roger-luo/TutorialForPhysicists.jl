var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Introduction",
    "title": "Introduction",
    "category": "page",
    "text": ""
},

{
    "location": "#A-Julia-Tutorial-For-Physicists-1",
    "page": "Introduction",
    "title": "A Julia Tutorial For Physicists",
    "category": "section",
    "text": "This is a Julia tutorial for Physicists. You will learn how to use Julia and how to use it for Physics here."
},

{
    "location": "#Slides-1",
    "page": "Introduction",
    "title": "Slides",
    "category": "section",
    "text": "You can access the presentation online: The Julia Language"
},

{
    "location": "#Contents-1",
    "page": "Introduction",
    "title": "Contents",
    "category": "section",
    "text": "Pages = [\n    \"install.md\",\n    \"basics.md\",\n    \"toolchain.md\",\n    \"before/why.md\",\n    \"before/when.md\",\n    \"demo/README.md\",\n]"
},

{
    "location": "#Github-1",
    "page": "Introduction",
    "title": "Github",
    "category": "section",
    "text": "The tutorial is written in a standard Julia package on Github, you can find it here: TutorialForPhysicists.jl"
},

{
    "location": "#About-the-author-1",
    "page": "Introduction",
    "title": "About the author",
    "category": "section",
    "text": "Roger Luo"
},

{
    "location": "install/#",
    "page": "Installation",
    "title": "Installation",
    "category": "page",
    "text": ""
},

{
    "location": "install/#Installation-1",
    "page": "Installation",
    "title": "Installation",
    "category": "section",
    "text": ""
},

{
    "location": "install/#Download-and-Install-1",
    "page": "Installation",
    "title": "Download and Install",
    "category": "section",
    "text": "You can install the julia language interpreter from its official site julialang.org"
},

{
    "location": "install/#The-Easy-Way-1",
    "page": "Installation",
    "title": "The Easy Way",
    "category": "section",
    "text": ""
},

{
    "location": "install/#Linux-1",
    "page": "Installation",
    "title": "Linux",
    "category": "section",
    "text": "Download the latest binary version, unpack and link the binary file (path/to/julia-1.x.x/bin/julia) to your system pathsudo ln -s /path/to/julia-1.x.x/bin/julia /usr/bin/juliaCheck your installation by typing julia in your shell."
},

{
    "location": "install/#Mac-OS-1",
    "page": "Installation",
    "title": "Mac OS",
    "category": "section",
    "text": "Download the .dmg file, click and install. You may also want to set the path"
},

{
    "location": "install/#Windows-1",
    "page": "Installation",
    "title": "Windows",
    "category": "section",
    "text": "Follow the offical guide."
},

{
    "location": "install/#The-Hard-Way-(From-Source)-1",
    "page": "Installation",
    "title": "The Hard Way (From Source)",
    "category": "section",
    "text": ""
},

{
    "location": "install/#Build-from-source-1",
    "page": "Installation",
    "title": "Build from source",
    "category": "section",
    "text": "Build julia from source will help you enable some platform related optimizations. First, clone julia master branch$ git clone https://github.com/JuliaLang/julia.gitBuild stable version (using v1.0.0 as an example)$ cd julia\n$ git checkout v1.0.0Add this to Make.user fileprefix=/home/YOUR_USERNAME/.virtualenvs/julia-stable$ make && make install "
},

{
    "location": "install/#The-Hardest-Way-(using-Virtual-Environment,-shall-we-remove-this-part?-@Roger)-1",
    "page": "Installation",
    "title": "The Hardest Way (using Virtual Environment, shall we remove this part? @Roger)",
    "category": "section",
    "text": "If you don\'t care dependencies, Julia itself contains a environment manager for its own packages, you can just install your Julia program to global scope of the system."
},

{
    "location": "install/#Setup-your-Julia-Environment-1",
    "page": "Installation",
    "title": "Setup your Julia Environment",
    "category": "section",
    "text": "For \\nix users*If you want to use virtualenv to control julia binaries and compile it with other languages in the future. I suggest you hatch, a modern project, package, and virtual env manager.To install hatch, you need Python3.5+$ pip3 install --user hatchcreate a virtualenv by the following command$ hatch env julia-stable"
},

{
    "location": "install/#From-binary-file-1",
    "page": "Installation",
    "title": "From binary file",
    "category": "section",
    "text": "download from julialang.org and extract your binary file, it has the following structure.\n├── bin\n├── etc\n├── include\n├── lib\n├── LICENSE.md\n└── sharethen move these files into related folder.virtualenv/julia-stable/with the same structure: julia/bin => .virtualenv/julia-stable/bin\njulia/etc => .virtualenv/julia-stable/etc\netc."
},

{
    "location": "basics/#",
    "page": "Basics of Julia",
    "title": "Basics of Julia",
    "category": "page",
    "text": ""
},

{
    "location": "basics/#Basics-of-Julia-1",
    "page": "Basics of Julia",
    "title": "Basics of Julia",
    "category": "section",
    "text": ""
},

{
    "location": "basics/#Writing-an-Complex-Number-1",
    "page": "Basics of Julia",
    "title": "Writing an Complex Number",
    "category": "section",
    "text": ""
},

{
    "location": "basics/#Modeling-the-Zoo-1",
    "page": "Basics of Julia",
    "title": "Modeling the Zoo",
    "category": "section",
    "text": ""
},

{
    "location": "before/why/#",
    "page": "Why choose Julia",
    "title": "Why choose Julia",
    "category": "page",
    "text": ""
},

{
    "location": "before/why/#Why-choose-Julia-1",
    "page": "Why choose Julia",
    "title": "Why choose Julia",
    "category": "section",
    "text": "Before you start to learn Julia, I have some personal suggestions and experience to share.There are plenty of languages that is able to do numerical computing well but why do you choose Julia? This is a frequently asked questions. Usually, people cannot understand why we choose Julia rather than Python, MATLAB, Lua, Lisp, C/C++ or the new comers like Rust/Go.They are great languages indeed, and in fact, I have been a heavy user in using Python and C/C++ for deep learning and quantum physics during 2016-2018. But I found that things were not what I expected. As an researcher in quantum physics, I would like to focus more on algorithms and theories rather than High Performance Computing (HPC) and compiler optimizations."
},

{
    "location": "before/why/#Quoting-Others\'-Comments-1",
    "page": "Why choose Julia",
    "title": "Quoting Others\' Comments",
    "category": "section",
    "text": "There were a lot discussions about the motivation of Julia and here is some selected opinions about the motivation:From Kristoffer Carlsson:This is pretty good reading:  Personal Thoughts about PyStons Outcome\"The thing I wish people understood about Python performance is that the difficulties come from Python’s extremely rich object model, not from anything about its dynamic scopes or dynamic types. The problem is that every operation in Python will typically have multiple points at which the user can override the behavior, and these features are used, often very extensively. Some examples are inspecting the locals of a frame after the frame has exited, mutating functions in-place, or even something as banal as overriding isinstance. \"Sure you can make Python fast in some cases where you use a small subset of the language. However, Python as a whole is extremely difficult to make fast because of the incredible freedom you have. The “compiler” can assume very little, so it is difficult to generate efficient code. Just consider the incredible amount of time and money that has been spent on trying to make it faster and the relatively mediocre success it has had (Pyston, Numba, PyPy etc).From RdeitsAnother piece of the “why Julia” puzzle is the fact that Julia does not treat a specific set of built-in types differently. That is, I can make my own type or immutable that can do anything that Julia’s built-in types can do, and my type can be just as fast as the one provided with Julia (if I were as skilled at numerical computing as the devs, which I am not). This isn’t just a nice feature; it’s essential to making things like automatic differentiation and other numeric types fast and easy to use. It’s also why we have really nice abstractions like the idea that an image is not a matrix of doubles or bytes but instead a matrix of colors. That works because Julia lets us define a whole family of color-related datatypes which provide useful behavior and abstraction at little or no run-time cost. That’s been the biggest benefit of Julia, in my experience.From Tem_PI:I think Julia’s advantage is some synergy between its type system, fast code on custom types and new abstractions, syntax, multiple dispatch, macros etcThus, its not just fast on specific types of code, but allows for unparalleled flexibility, code reuse, expression of ideas and abstractions, higher order programming etc in a way that makes numba and python seem stone age.Here is a concrete elucidating example of something that wouldn’t be possible in python: http://www.stochasticlifestyle.com/6-months-differentialequations-jl-going/Blogs:Why Julia"
},

{
    "location": "before/why/#Good-Performance-1",
    "page": "Why choose Julia",
    "title": "Good Performance",
    "category": "section",
    "text": "Firstly, languages like Python, C/C++ were designed for general purpose rather than Scientific Computing, and as a heavy user of Python, I found it is very convenient, flexible and productive if what you are working on have already provide python wrappers. For example, for web services, we have great frameworkss like: Django\nFlask \netc. For general purpose linear algebra and scientific computing, we havenumpy\nscipy\npandas\netc.And in recent years, the bloom of deep learning is based on a number of deep learning frameworks that provides Python wrappers: TensorFlow\nPyTorch\nMXNet\netc.Moreover, in the field of quantum physics and quantum chemistry, we havePySCF\nProject Q\nOpenFermion\nQuTiPHowever, Python is only an wrapper in most packages above, and for projects written mainly in Python like Project Q have been sufferring performance issue.# projectq & scipy benchmark 6 bit time evolution, QAOA algorithm.\nprojectq 19.45s user 0.72s system 100% cpu 20.173 total\nscipy  10.68s user 0.13s system 100% cpu 10.813 totalThis is because the dynamical feature of Python itself provides you its simple and flexible experience but costs extra overhead on its performance and make the language itself hard to optimize. You cannot write a performance-expensive function in pure Python. However, most researchers in the field of Physics do have the time and should not need to learn how to write C/C++ programs for Python. To overcome this performance issue and let research users focus on what they should focus on, developers usually have the following options:write a backend in pure C/C++ and bind it to Python with C API (You can use pybind11 now) or for small projects there is cffi\nrewrite part of the code in Cython as a subset of the language\nuse JIT compilers like: numbaEven with numpy and scipy, in the field of quanutm physics, the performance is still not enough, especially when you have a lot for loops and complex data structure and abstractions.Comparing to dynamic langauges (like Python, LuaJIT), Julia has a fair performance, there are several benchmarks that can demonstrate this:The official benchmark julialang.org\nLU Factorization benchmark A Speed Comparison of C, Julia, Python, Numba and Cython on LU Factorization\nBasic Comparison of Python, Julia, R, Matlab and IDL\nCystal language benchmark\nMicro-Benchmarking Julia, C++ and Pythran on an Economics kernel\nFun With Just-In-Time Compiling: Julia, Python, R and pqR"
},

{
    "location": "before/why/#Awesome-Foreign-Function-Interface-(FFI)-1",
    "page": "Why choose Julia",
    "title": "Awesome Foreign Function Interface (FFI)",
    "category": "section",
    "text": "Julia has an awesome FFI that allows us make use of historial programs without a lot extra efforts. And we can always optimize our Julia code easily with C/C++/Fortran."
},

{
    "location": "before/why/#C/Fortran-1",
    "page": "Why choose Julia",
    "title": "C/Fortran",
    "category": "section",
    "text": "You can directly call C/Fortran libraries from Julia itself without any wrapper, libraries being loaded, and there is no extra C APIs to learn (although Julia has C APIs indeed)."
},

{
    "location": "before/why/#C-1",
    "page": "Why choose Julia",
    "title": "C++",
    "category": "section",
    "text": "You can directly call C++ class by Cxx.jl and import your C++ objects and functions directly by include header files rather than writing glue codes or expose to C APIs. Moreover, you can even run Cxx code by import them as strings."
},

{
    "location": "before/why/#Python-1",
    "page": "Why choose Julia",
    "title": "Python",
    "category": "section",
    "text": "You can directly import arbitrary Python modules by PyCall.jl and call Python functions (with automatic conversion of types between Julia and Python), define Python classes from Julia methods, and share large data structures between Julia and Python without copying them.using PyCall\n@pyimport math\nmath.sin(math.pi / 4) - sin(pi / 4)  # returns 0.0"
},

{
    "location": "before/why/#MATLAB-1",
    "page": "Why choose Julia",
    "title": "MATLAB",
    "category": "section",
    "text": "You can directly read MATLAB scripts with MAT.jl or you can just call MATLAB engine from Julia with MATLAB.jl"
},

{
    "location": "before/why/#Powerful-Metaprogramming-1",
    "page": "Why choose Julia",
    "title": "Powerful Metaprogramming",
    "category": "section",
    "text": "Julia inherit the this powerful legacy from Lisp. It can process its own program with its the langauge itself. Which makes it becomes extremely easy to write Domain Specific Languages (DSL), and do code generation, there are some packages that could demonstrate these features:JuMP DSL for Mathematical Optimization\nAutoDiffSource Automatic differentiation with source code transformation.\nTensorOperations.jl tensor contraction and related operations"
},

{
    "location": "before/why/#Designed-for-Scientific-Computing-1",
    "page": "Why choose Julia",
    "title": "Designed for Scientific Computing",
    "category": "section",
    "text": "But I\'m not saying Python is not good, as a famous saying:No Silver BulletPython is not designed for scientific tasks and therefore it won\'t be as convenient as languages designed for these tasks under certain circumstances. In fact, Julia\'s amazing performance is not magic, it is mainly because of its language design, it is design for science rather than web service (nodejs/PHP/etc.), games (C/C++/Lua/etc.) or servers(bash/awk/etc.).It will be extremely hard to implement similar functionalities in Python when a Python class is inside a loop, and it is difficult/impossible to get user defined objects in things like Numba, while Julia\'s user defined types are as fast as builtins.You might find that you need to consider something more in Julia including types, abstractions and etc. But remember there is no silver bullet, when you need to improve performance in Python, what you benefit from will become obstacles."
},

{
    "location": "before/when/#",
    "page": "When choose Julia",
    "title": "When choose Julia",
    "category": "page",
    "text": ""
},

{
    "location": "before/when/#When-choose-Julia-1",
    "page": "When choose Julia",
    "title": "When choose Julia",
    "category": "section",
    "text": "As we priviously mentioned, Julia is not magic and there is no silver bullet, we have to choose our language for certain problems, here are some suggestions:"
},

{
    "location": "before/when/#When-you-need-Julia-1",
    "page": "When choose Julia",
    "title": "When you need Julia",
    "category": "section",
    "text": "if you usually need to optimize Python with C/C++/Fortran/etc.\nif your program reqiures a lot loops and matrix multiplications and other computation heavy tasks\nif your problem requires a lot abstractions but also sensitive to performance.\nif your interface will looks better with a DSL, or some addons on its original language. (like einsum for tensor contraction)\nYour collaborator or supervisor use Julia."
},

{
    "location": "before/when/#When-you-don\'t-need-Julia-1",
    "page": "When choose Julia",
    "title": "When you don\'t need Julia",
    "category": "section",
    "text": "Your program is heavily based on pure Python and its packages (like Pytorch, MXNet, TensorFlow, etc.), and there is no better or equivalent Julia packages.\nYou care about performance, but most of your functions and commands will only be executed few times. (because we have a JIT overhead in Julia)\nYou don\'t care performance very much at the moment, about 5x slower is acceptable. (tasks like GUI, plotting, etc.)\nYour collaborator or supervisor do not accept new language."
},

{
    "location": "demo/README/#",
    "page": "Introduction",
    "title": "Introduction",
    "category": "page",
    "text": ""
},

{
    "location": "demo/README/#Introduction-1",
    "page": "Introduction",
    "title": "Introduction",
    "category": "section",
    "text": ""
},

{
    "location": "demo/kron/#",
    "page": "Kronnecker Parser",
    "title": "Kronnecker Parser",
    "category": "page",
    "text": ""
},

{
    "location": "demo/kron/#Kronnecker-Parser-1",
    "page": "Kronnecker Parser",
    "title": "Kronnecker Parser",
    "category": "section",
    "text": ""
},

{
    "location": "demo/lattice/#",
    "page": "Write A General Package for Lattice",
    "title": "Write A General Package for Lattice",
    "category": "page",
    "text": ""
},

{
    "location": "demo/lattice/#Write-A-General-Package-for-Lattice-1",
    "page": "Write A General Package for Lattice",
    "title": "Write A General Package for Lattice",
    "category": "section",
    "text": ""
},

{
    "location": "toolchain/#",
    "page": "Tool Chain for Physicists",
    "title": "Tool Chain for Physicists",
    "category": "page",
    "text": ""
},

{
    "location": "toolchain/#Tool-Chain-for-Physicists-1",
    "page": "Tool Chain for Physicists",
    "title": "Tool Chain for Physicists",
    "category": "section",
    "text": "There are some useful tools (Packages) that will help you work with Julia in Physics, but you might want to find what you want first in Julia.jl.Julia.jl Curated decibans of Julia language."
},

{
    "location": "toolchain/#Tensor-Operations-and-Linear-Algebra-1",
    "page": "Tool Chain for Physicists",
    "title": "Tensor Operations and Linear Algebra",
    "category": "section",
    "text": ""
},

{
    "location": "toolchain/#Tensor-Basics-1",
    "page": "Tool Chain for Physicists",
    "title": "Tensor Basics",
    "category": "section",
    "text": "TensorOperations Julia package for tensor contractions and related operations\nEinsum.jl Einstein summation notation in Julia\nCuArrays.jl A Curious Cumulation of CUDA Cuisine \nStaticArrays.jl Statically sized arrays for Julia\nLuxurySparse.jl High performance extensions for sparse matrices."
},

{
    "location": "toolchain/#Large-Sparse-Matrix-Eigensolvers-1",
    "page": "Tool Chain for Physicists",
    "title": "Large Sparse Matrix Eigensolvers",
    "category": "section",
    "text": "IterativeSolvers.jl Iterative algorithms for solving linear systems, eigensystems, and singular value problems \nKrylovKit.jl A Julia package collecting a number of Krylov-based algorithms for linear problems, singular value and eigenvalue problems and the application of functions of linear maps or operators to vectors.\nJacobiDavidson.jl An implementation of Jacobi-Davidson in Julia.\nArnoldiMethod.jl The Implicitly Restarted Arnoldi Method, natively in Julia.\nKrylov.jl: part of the   JuliaSmoothOptimizers organisation, solves linear systems and least square problems, specific for linear operators from   LinearOperators.jl.\nKrylovMethods.jl: specific for sparse matrices"
},

{
    "location": "toolchain/#Others-1",
    "page": "Tool Chain for Physicists",
    "title": "Others",
    "category": "section",
    "text": "Expokit.jl This package provides Julia implementations of some routines contained in EXPOKIT.\nExpmV.jl This is a Julia translation of the MATLAB implementation of Al-Mohy and Higham\'s function for computing expm(tA)v when A is sparse, without explicitly computing expm(A).\nJuMP.jl Modeling language for Mathematical Optimization (linear, mixed-integer, conic, semidefinite, nonlinear)\nLowRankModels.jl LowRankModels.jl is a julia package for modeling and fitting generalized low rank models."
},

{
    "location": "toolchain/#Mathematics-and-Physics-1",
    "page": "Tool Chain for Physicists",
    "title": "Mathematics and Physics",
    "category": "section",
    "text": "Cliffords.jl Efficient calculation of Clifford circuits in Julia.\nStatsBase.jl StatsBase.jl is a Julia package that provides basic support for statistics.\nSymata.jl language for symbolic mathematics\nYao.jl Extensible, Efficient Quantum Algorithm Design for Humans.\nQuantumLab.jl A workbench for Quantum Chemistry and Quantum Physics in Julia\nQuantumOptics.jl Library for the numerical simulation of closed as well as open quantum systems."
},

{
    "location": "toolchain/#Deep-Learning-1",
    "page": "Tool Chain for Physicists",
    "title": "Deep Learning",
    "category": "section",
    "text": ""
},

{
    "location": "toolchain/#Frameworks-1",
    "page": "Tool Chain for Physicists",
    "title": "Frameworks",
    "category": "section",
    "text": "Knet.jl Koç University deep learning framework.\nTensorFlow.jl A Julia wrapper for TensorFlow\nMXNet.jl MXNet Julia Package - flexible and efficient deep learning in Julia"
},

{
    "location": "toolchain/#Auto-Differentiation-1",
    "page": "Tool Chain for Physicists",
    "title": "Auto Differentiation",
    "category": "section",
    "text": "ForwardDiff.jl Forward Mode Automatic Differentiation for Julia\nReverseDiffSource.jl Reverse automated differentiation from source\nAutoDiffSource.jl Julia automatic differentiation with source code transformation"
},

{
    "location": "toolchain/#Others-2",
    "page": "Tool Chain for Physicists",
    "title": "Others",
    "category": "section",
    "text": "MLKernels.jl A Julia package for Mercer kernel functions (or the covariance functions used in Gaussian processes) that are used in the kernel methods of machine learning"
},

{
    "location": "toolchain/#Data-Science-1",
    "page": "Tool Chain for Physicists",
    "title": "Data Science",
    "category": "section",
    "text": ""
},

{
    "location": "toolchain/#Data-Structure-1",
    "page": "Tool Chain for Physicists",
    "title": "Data Structure",
    "category": "section",
    "text": "LightGraphs.jl An optimized graphs package for Julia\nAbstractTrees.jl Abstract julia interfaces for working with trees\nDendriform.jl Dendriform di-algebra algorithms to compute using Loday\'s arithmetic on groves of planar binary trees."
},

{
    "location": "toolchain/#Data-Compression-and-Storage-1",
    "page": "Tool Chain for Physicists",
    "title": "Data Compression and Storage",
    "category": "section",
    "text": "JLD.jl Saving and loading julia variables while preserving native types\nJLD2.jl HDF5-compatible file format in pure Julia"
},

{
    "location": "toolchain/#Data-Visualization-1",
    "page": "Tool Chain for Physicists",
    "title": "Data Visualization",
    "category": "section",
    "text": "Interact.jl Interactive widgets to play with your Julia code\nPlots.jl Powerful convenience for Julia visualizations and data analysis\nPyPlot.jl This module provides a Julia interface to the Matplotlib plotting library from Python, and specifically to the matplotlib.pyplot module."
},

{
    "location": "toolchain/#Other-Developer\'s-Tools-1",
    "page": "Tool Chain for Physicists",
    "title": "Other Developer\'s Tools",
    "category": "section",
    "text": "BenchmarkTools.jl BenchmarkTools makes performance tracking of Julia code easy by supplying a framework for writing and running groups of benchmarks as well as comparing benchmark results.\nPackageCompiler.jl  Compile your Julia Package\nStatProfilerHTML.jl Show Julia profiling data in an explorable HTML page\nCxx.jl The Julia C++ Interface\nPyCall.jl This package provides the ability to directly call and fully interoperate with Python from the Julia language.\nLazy.jl provides Julia with the cornerstones of functional programming"
},

{
    "location": "FAQ/#",
    "page": "FAQ",
    "title": "FAQ",
    "category": "page",
    "text": ""
},

{
    "location": "FAQ/#Frequently-Asked-Questions-1",
    "page": "FAQ",
    "title": "Frequently Asked Questions",
    "category": "section",
    "text": "Firstly for usage please reference the Julia documentation, here I will offer some anwser for questions I was asked more frequently from my personal view."
},

{
    "location": "FAQ/#A-Selection-of-FAQ-from-Official-Documentation-1",
    "page": "FAQ",
    "title": "A Selection of FAQ from Official Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "FAQ/#How-do-I-delete-an-object-in-memory?-1",
    "page": "FAQ",
    "title": "How do I delete an object in memory?",
    "category": "section",
    "text": "Julia does not have an analog of MATLAB\'s clear function; once a name is defined in a Julia session (technically, in module Main), it is always present.If memory usage is your concern, you can always replace objects with ones that consume less memory. For example, if A is a gigabyte-sized array that you no longer need, you can free the memory with A = 0. The memory will be released the next time the garbage collector runs; you can force this to happen with gc()."
},

{
    "location": "FAQ/#What-does-\"type-stable\"-mean?-1",
    "page": "FAQ",
    "title": "What does \"type-stable\" mean?",
    "category": "section",
    "text": "It means that the type of the output is predictable from the types of the inputs. In particular, it means that the type of the output cannot vary depending on the values of the inputs. The following code is not type-stable:function unstable(flag::Bool)\n    if flag\n        return 1\n    else\n        return 1.0\n    end\nendIt returns either an Int or a Float64 depending on the value of its argument. Since Julia can\'t predict the return type of this function at compile-time, any computation that uses it will have to guard against both types possibly occurring, making generation of fast machine code difficult."
},

{
    "location": "FAQ/#Lack-of-explicit-return-in-Julia,-heartache-or-happiness?-1",
    "page": "FAQ",
    "title": "Lack of explicit return in Julia, heartache or happiness?",
    "category": "section",
    "text": "Feature Description Julia\'s function will return the last of a function implicitly. See this maillist Lack of explicit return in Julia, heartache or happiness?"
},

]}
