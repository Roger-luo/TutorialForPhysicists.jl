import numpy as np

def propagate(LHS, X, Y):
    P = np.einsum('ijk, ipq', LHS, X)
    Q = np.einsum('jkqp, jvrq', P, Y)
    R = np.einsum('kprv, kvm', Q, X)
    return R

if __name__ == '__main__':
    LHS = np.random.randn(5000, 10, 5000)
    X = np.random.randn(5000, 2, 5000)
    Y = np.random.randn(10, 2, 10, 2)

    for i in range(100):
        propagate(LHS, X, Y)
    # print(
    #     timeit(
    #         stmt='import einsum; einsum.propagate(LHS, X, Y)',
    #         setup='import numpy as np;LHS = np.random.randn(200, 10, 200);X = np.random.randn(200, 2, 200);Y = np.random.randn(10, 2, 10, 2)',
    #         number=50
    #     )
    # )
