# Test Your Julia Program

Writting unit tests can help you prevent you program from unexpected behaviour and make sure everything you update to your program is correct.

Testing in Julia is simple, just use this macro

```julia
julia> @test 1 == 1
```

Also you can use a test set to group your tests together

```julia
@testset "My Tests" begin
    @test 1 == 1
    @test 2 == 2
end
```
