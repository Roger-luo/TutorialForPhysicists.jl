# TutorialForPhysicists

[![][docs-latest-img]][docs-latest-url]
[![Build Status][travis-master-img]][travis-master-url]
[![Code Coverage][coveralls-master-img]][coveralls-master-url]
[![codecov.io][codcov-master-img]][codcov-master-url]


Julia Tutorial for Physicists. You can access the presentation here:

[Julia: A Fresh New Approach to Numerical Computing](http://104.224.129.42/slides/the-julia-language/)

## Contents

- [Setup Your Julia Environment](/docs/src/install.md)
- [Tutorial Contents](/docs/src/demo/README.md)
- [Tool Chain for Physicists](/docs/src/toolchain.md)
- [Why Julia](/docs/src/before/why.md)
- [Notebooks](/notebooks/README.md)
- [Demos](/src/README.md)

## Installation

#### Julia

see [Setup Your Julia Environment](/docs/src/install.md)

#### Step 1
Open your julia REPL by

- For *nix users (Ubuntu, MacOS, etc.) open a terminal and type

```shell
shell> julia
```

- For Windows users click the icon or open a windows command line and type `julia`.

#### Step 2

type the following command in your julia REPL

```julia-repl
julia> Pkg.clone(git@github.com:Roger-luo/JuliaForPhysicist.jl.git)
```

## Author

Roger Luo


[docs-latest-img]: https://img.shields.io/badge/docs-latest-blue.svg
[docs-latest-url]: http://rogerluo.me/TutorialForPhysicists.jl/latest

[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg
[docs-stable-url]: http://rogerluo.me/TutorialForPhysicists.jl/stable

[travis-master-img]:https://travis-ci.org/Roger-luo/TutorialForPhysicists.jl.svg?branch=master
[travis-master-url]:https://travis-ci.org/Roger-luo/TutorialForPhysicists.jl

[coveralls-master-img]:https://coveralls.io/repos/Roger-luo/TutorialForPhysicists.jl/badge.svg?branch=master&service=github
[coveralls-master-url]:https://coveralls.io/github/Roger-luo/TutorialForPhysicists.jl?branch=master

[codcov-master-img]:http://codecov.io/github/Roger-luo/TutorialForPhysicists.jl/coverage.svg?branch=master
[codcov-master-url]:http://codecov.io/github/Roger-luo/TutorialForPhysicists.jl?branch=master