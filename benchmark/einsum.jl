using TensorOperations

function propagate(LHS, X, Y)
    for i = 1:100
        @tensor R[6,7,8] := LHS[1,2,3]*X[1,4,6]*Y[2,5,7,4]*X[3,5,8]
    end
end

LHS = randn(5000, 10, 5000); X = randn(5000, 2, 5000); Y = randn(10, 2, 10, 2);
println(@allocated propagate(LHS, X, Y))