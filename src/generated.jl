@generated function tri2int(x::NTuple{N, Int}) where N
    ex = :(x[1])
    for i = 2:N
        base = 3^(i-1)
        ex = :($ex + x[$i] * $base)
    end
    return ex
end

tri2int(x::Int...) = tri2int(x)

# 1 + 2 * 3 + 3 * 9
@show tri2int(1, 2, 3)
