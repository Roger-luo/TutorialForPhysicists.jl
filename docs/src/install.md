# Installation

## Download and Install

You can install the julia language interpreter from its official site [julialang.org](https://julialang.org/downloads/)

### The Easy Way
#### Linux
Download the latest binary version, unpack and link the binary file (path/to/julia-1.x.x/bin/julia) to your system path
```bash
sudo ln -s /path/to/julia-1.x.x/bin/julia /usr/bin/julia
```
Check your installation by typing `julia` in your shell.

#### Mac OS
Download the `.dmg` file, click and install. You may also want to set the path
```
```

#### Windows
Follow the offical guide.

### The Hard Way (From Source)
#### Build from source

Build julia from source will help you enable some platform related optimizations. First, clone julia master branch

```s
$ git clone https://github.com/JuliaLang/julia.git
```

Build stable version (using v1.0.0 as an example)

```s
$ cd julia
$ git checkout v1.0.0
```

Add this to **Make.user** file

```s
prefix=/home/YOUR_USERNAME/.virtualenvs/julia-stable
```

```s
$ make && make install 
```
### The Hardest Way (using Virtual Environment, shall we remove this part? @Roger)
If you don't care dependencies, Julia itself contains a environment manager for its own packages, you can just install your Julia program to global scope of the system.

#### Setup your Julia Environment

*For \*nix users*

If you want to use virtualenv to control julia binaries and compile it with other languages in the future. I suggest you [hatch](https://github.com/ofek/hatch), a modern project, package, and virtual env manager.

To install hatch, you need **Python3.5+**

```s
$ pip3 install --user hatch
```

create a virtualenv by the following command

```s
$ hatch env julia-stable
```

#### From binary file

download from [julialang.org](https://julialang.org/downloads) and extract your binary file, it has the following structure

```
.
├── bin
├── etc
├── include
├── lib
├── LICENSE.md
└── share
```

then move these files into related folder

```s
.virtualenv/julia-stable/
```

with the same structure: 

- `julia/bin => .virtualenv/julia-stable/bin`

- `julia/etc => .virtualenv/julia-stable/etc`

- etc.


