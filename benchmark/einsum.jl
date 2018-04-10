using TensorOperations

function propagate(LHS, X, Y)
    @tensor R[6,7,8] := LHS[1,2,3]*X[1,4,6]*Y[2,5,7,4]*X[3,5,8]
end

LHS = randn(200, 10, 200); X = randn(200, 2, 200); Y = randn(10, 2, 10, 2);
propagate(LHS, X, Y)
