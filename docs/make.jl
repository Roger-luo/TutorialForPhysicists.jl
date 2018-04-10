using Documenter, TutorialForPhysicists

makedocs(
    modules = [TutorialForPhysicists],
    clean = false,
    format = :html,
    sitename = "A Julia Tutorial for Physicists",
    linkcheck = !("skiplinks" in ARGS),
    analytics = "UA-89508993-1",
    pages = [
        "Introduction" => "index.md",
        "install.md",
        "basics.md",
        "Before You Started" => Any[
            "Why choose Julia" => "before/why.md",
            "before/when.md",
        ],
        "For Quantum Physics" => Any[
            "Introduction" => "demo/README.md",
            "demo/kron.md",
            "demo/lattice.md",
        ],
        "Tool Chain for Physicists" => "toolchain.md",
        "FAQ" => "FAQ.md",
    ],
    html_prettyurls = !("local" in ARGS),
    html_canonical = "https://rogerluo.me/TutorialForPhysicists.jl/latest/",
)

deploydocs(
    repo = "github.com/Roger-luo/TutorialForPhysicists.jl.git",
    target = "build",
    julia = "0.6",
    deps = nothing,
    make = nothing,
)
