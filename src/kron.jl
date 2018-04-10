# first we define some sugars
⊗(A, B) = kron(A, B)

"""
    kronprod(A, B, ...)

kronnecker production of a sequence of matrixes.
"""
function kronprod(itr)
    state = start(itr)
    first, state = next(itr, state)
    second, state = next(itr, state)
    pd = kron(first, second)
    while !done(itr, state)
        val, state = next(itr, state)
        pd = kron(pd, val)
    end
    return pd
end

# we will use variational args to beautify the interface
kronprod(m::AbstractMatrix...) = kronprod(m)

# We will use a heap to store the expressions
# Heap is included in the DataStructures package
using DataStructures

# define the abstraction of all available kronnecker expression
# a kronnecker expression means the basic building blocks in an
# expression that describe some kronnecker products
abstract type KronExpr end

# An KronExpr 
