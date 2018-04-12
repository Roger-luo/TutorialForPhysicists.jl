import numpy as np

def propagate(LHS, X, Y):
    P = np.tensordot(LHS, X, axes=([0, ], [0, ]))
    Q = np.tensordot(P, Y, axes=([0, 2], [0, 1]))
    R = np.tensordot(Q, X, axes=([0, 3], [0, 1]))
    return R
