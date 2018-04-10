# Frequently Asked Questions

Firstly for usage please reference the [Julia documentation](https://docs.julialang.org/en/stable/manual/faq/), here I will offer some anwser for questions I was asked more frequently from my personal view.

## A Selection of FAQ from Official Documentation

### How do I delete an object in memory?

Julia does not have an analog of MATLAB's clear function; once a name is defined in a Julia session (technically, in module Main), it is always present.

If memory usage is your concern, you can always replace objects with ones that consume less memory. For example, if A is a gigabyte-sized array that you no longer need, you can free the memory with A = 0. The memory will be released the next time the garbage collector runs; you can force this to happen with [gc()](https://docs.julialang.org/en/stable/stdlib/base/#Base.gc).

### What does "type-stable" mean?

It means that the type of the output is predictable from the types of the inputs. In particular, it means that the type of the output cannot vary depending on the values of the inputs. The following code is not type-stable:

```julia
function unstable(flag::Bool)
    if flag
        return 1
    else
        return 1.0
    end
end
```

It returns either an Int or a [Float64](https://docs.julialang.org/en/stable/stdlib/numbers/#Core.Float64) depending on the value of its argument. Since Julia can't predict the return type of this function at compile-time, any computation that uses it will have to guard against both types possibly occurring, making generation of fast machine code difficult.

## Lack of explicit return in Julia, heartache or happiness?

**Feature Description** Julia's function will return the last of a function implicitly. 

See this maillist [Lack of explicit return in Julia, heartache or happiness?](https://groups.google.com/forum/#!topic/julia-users/4RVR8qQDrUg)
