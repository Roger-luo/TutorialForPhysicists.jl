# Tool Chain for Physicists

There are some useful tools (Packages) that will help you work with Julia in Physics, but you might want to find what you want first in **Julia.jl**.

- [Julia.jl](https://github.com/svaksha/Julia.jl) Curated decibans of Julia language.

## Tensor Operations and Linear Algebra
#### Tensor Basics
- [TensorOperations](https://github.com/Jutho/TensorOperations.jl) Julia package for tensor contractions and related operations
- [Einsum.jl](https://github.com/ahwillia/Einsum.jl) Einstein summation notation in Julia
- [CuArrays.jl](https://github.com/JuliaGPU/CuArrays.jl) A Curious Cumulation of CUDA Cuisine 
- [StaticArrays.jl](https://github.com/JuliaArrays/StaticArrays.jl) Statically sized arrays for Julia
- [LuxurySparse.jl](https://github.com/QuantumBFS/LuxurySparse.jl) High performance extensions for sparse matrices.

#### Large Sparse Matrix Eigensolvers
- [IterativeSolvers.jl](https://github.com/JuliaMath/IterativeSolvers.jl) Iterative algorithms for solving linear systems, eigensystems, and singular value problems 
- [KrylovKit.jl](https://github.com/Jutho/KrylovKit.jl) A Julia package collecting a number of Krylov-based algorithms for linear problems, singular value and eigenvalue problems and the application of functions of linear maps or operators to vectors.
- [JacobiDavidson.jl](https://github.com/haampie/JacobiDavidson.jl) An implementation of Jacobi-Davidson in Julia.
- [ArnoldiMethod.jl](https://github.com/haampie/ArnoldiMethod.jl) The Implicitly Restarted Arnoldi Method, natively in Julia.
- [Krylov.jl](https://github.com/JuliaSmoothOptimizers/Krylov.jl): part of the
    [JuliaSmoothOptimizers](https://github.com/JuliaSmoothOptimizers) organisation, solves linear systems and least square problems, specific for linear operators from
    [LinearOperators.jl](https://github.com/JuliaSmoothOptimizers/LinearOperators.jl).
- [KrylovMethods.jl](https://github.com/lruthotto/KrylovMethods.jl): specific for sparse matrices

#### Others
- [Expokit.jl](https://github.com/acroy/Expokit.jl) This package provides Julia implementations of some routines contained in [EXPOKIT](http://www.maths.uq.edu.au/expokit).
- [ExpmV.jl](https://github.com/matteoacrossi/ExpmV.jl) This is a Julia translation of the MATLAB implementation of Al-Mohy and Higham's function for computing expm(t*A)*v when A is sparse, without explicitly computing expm(A).

- [JuMP.jl](https://github.com/JuliaOpt/JuMP.jl) Modeling language for Mathematical Optimization (linear, mixed-integer, conic, semidefinite, nonlinear)
- [LowRankModels.jl](https://github.com/madeleineudell/LowRankModels.jl) LowRankModels.jl is a julia package for modeling and fitting generalized low rank models.

## Mathematics and Physics
- [Cliffords.jl](https://github.com/BBN-Q/Cliffords.jl) Efficient calculation of Clifford circuits in Julia.
- [StatsBase.jl](https://github.com/JuliaStats/StatsBase.jl) StatsBase.jl is a Julia package that provides basic support for statistics.
- [Symata.jl](https://github.com/jlapeyre/Symata.jl) language for symbolic mathematics

- [Yao.jl](https://github.com/QuantumBFS/Yao.jl) Extensible, Efficient Quantum Algorithm Design for Humans.
- [QuantumLab.jl](https://github.com/vonDonnerstein/QuantumLab.jl) A workbench for Quantum Chemistry and Quantum Physics in Julia
- [QuantumOptics.jl](https://github.com/qojulia/QuantumOptics.jl) Library for the numerical simulation of closed as well as open quantum systems.

## Deep Learning
#### Frameworks
- [Knet.jl](https://github.com/denizyuret/Knet.jl) Koç University deep learning framework.
- [TensorFlow.jl](https://github.com/malmaud/TensorFlow.jl) A Julia wrapper for TensorFlow
- [MXNet.jl](https://github.com/dmlc/MXNet.jl) MXNet Julia Package - flexible and efficient deep learning in Julia

#### Auto Differentiation
- [ForwardDiff.jl](https://github.com/JuliaDiff/ForwardDiff.jl) Forward Mode Automatic Differentiation for Julia
- [ReverseDiffSource.jl](https://github.com/JuliaDiff/ReverseDiffSource.jl) Reverse automated differentiation from source
- [AutoDiffSource.jl](https://github.com/gaika/AutoDiffSource.jl) Julia automatic differentiation with source code transformation

#### Others
- [MLKernels.jl](https://github.com/trthatcher/MLKernels.jl) A Julia package for Mercer kernel functions (or the covariance functions used in Gaussian processes) that are used in the kernel methods of machine learning

## Data Science
#### Data Structure
- [LightGraphs.jl](https://github.com/JuliaGraphs/LightGraphs.jl) An optimized graphs package for Julia
- [AbstractTrees.jl](https://github.com/Keno/AbstractTrees.jl) Abstract julia interfaces for working with trees
- [Dendriform.jl](https://github.com/chakravala/Dendriform.jl) Dendriform di-algebra algorithms to compute using Loday's arithmetic on groves of planar binary trees.

#### Data Compression and Storage
- [JLD.jl](https://github.com/JuliaIO/JLD.jl) Saving and loading julia variables while preserving native types
- [JLD2.jl](https://github.com/simonster/JLD2.jl) HDF5-compatible file format in pure Julia

#### Data Visualization
- [Interact.jl](https://github.com/JuliaGizmos/Interact.jl) Interactive widgets to play with your Julia code
- [Plots.jl](https://github.com/JuliaPlots/Plots.jl) Powerful convenience for Julia visualizations and data analysis
- [PyPlot.jl](https://github.com/JuliaPy/PyPlot.jl) This module provides a Julia interface to the Matplotlib plotting library from Python, and specifically to the matplotlib.pyplot module.

## Other Developer's Tools
- [BenchmarkTools.jl](https://github.com/JuliaCI/BenchmarkTools.jl) BenchmarkTools makes performance tracking of Julia code easy by supplying a framework for writing and running groups of benchmarks as well as comparing benchmark results.
- [PackageCompiler.jl](https://github.com/JuliaLang/PackageCompiler.jl)  Compile your Julia Package
- [StatProfilerHTML.jl](https://github.com/tkluck/StatProfilerHTML.jl) Show Julia profiling data in an explorable HTML page
- [Cxx.jl](https://github.com/Keno/Cxx.jl) The Julia C++ Interface
- [PyCall.jl](https://github.com/JuliaPy/PyCall.jl) This package provides the ability to directly call and fully interoperate with Python from the Julia language.
- [Lazy.jl](https://github.com/MikeInnes/Lazy.jl) provides Julia with the cornerstones of functional programming

