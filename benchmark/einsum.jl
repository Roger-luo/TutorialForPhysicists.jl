using TensorOperations

function propagate(LHS, X, Y)
    @tensor R[6,7,8] := LHS[1,2,3]*X[1,4,6]*Y[2,5,7,4]*X[3,5,8]
end
