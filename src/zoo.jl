# The zoo society
abstract type Animal end
abstract type AbstractBird <: Animal end
abstract type AbstractCat <: Animal end

# We will define some required methods for Animal
# Some of them have a default returns

# All subtype of Animal should have a name
name(animal::Animal) = animal.name
gender(animal::Animal) = "unknown"

# We can know about each animal if it can fly
# By requiring this function (or property)
# Most animals won't fly
flyable(animal::Animal) = false
# Most birds can
flyable(bird::AbstractBird) = true

# play is a kind of relationship inside the society of animals
# Most animal won't play with others
play(a::Animal, b::Animal) = "$(name(a)) won't play with $(name(b))"
play(a::Animal, b::Animal, c::Animal) = "$(name(a)), $(name(b)), $(name(c)) won't play together"

# normal cats
struct Cat <: AbstractCat
    name::String
end

# normal birds
struct Bird <: AbstractBird
    name::String
end

# Kitty is a special Cat
struct Kitty <: AbstractCat
    weight::Float64
end

# Kitty is 0.3kg when she was born
Kitty() = Kitty(0.3)

# comment this method to see what will happen
# Kitty's name
name(me::Kitty) = "Kitty"
# Kitty's gender
gender(me::Kitty) = "female"

# Kohen is a special bird
struct Kohen <: AbstractBird
    ishome::Bool
end

# Kohen is usually not at home
Kohen() = Kohen(false)

# Kohen's name
name(me::Kohen) = "Kohen"
# Kohen's sex
gender(me::Kohen) = "male"

# Kohen cannot fly
flyable(me::Kohen) = false

# Kohen will play with Kitty
# comment this to see what will happen
play(bird::Kohen, cat::Kitty) = "$(name(bird)) will play with $(name(cat))"
play(cat::Kitty, bird::Kohen) = play(bird, cat)
# play(cat::Kitty, bird::Kohen) = "$(name(cat)) won't play with $(name(bird))"

# We will edit the print content of Kitty and Kohen
import Base: show

show(io::IO, kitty::Kitty) = print(io, "Kitty (weight $(kitty.weight))")
show(io::IO, kohen::Kohen) = print(io, "Kohen (is home: $(kohen.ishome))")


###################################
# Bear can have different colors
abstract type AbstractBearColor end
abstract type Green <: AbstractBearColor end
abstract type White <: AbstractBearColor end
abstract type Brown <: AbstractBearColor end
abstract type AbstractBear{T <: AbstractBearColor} <: Animal end

# we could define some general interface to All KINDS OF bears
# and use multiple dispatch to specify methods to certain
# type with certain type parameters (signature)
# the word where declares type parameters
color(::Type{AbstractBear{T}}) where T = "We don't have $T Bear"
# you can specify type parameters' parent type if you want
# Union will create a type union, behaves like an abstract type
# in type inference, but it cannot be subtyped
color(::Type{AbstractBear{T}}) where {T <: Union{Brown, White}} = T
color(bear::AbstractBear) where T = color(typeof(bear))

# Abram is a Brown bear
struct Abram <: AbstractBear{Brown}
end

name(bear::Abram) = "Abram"

# Dima is a White bear
struct Dima <: AbstractBear{White}
end

name(bear::Dima) = "Dima"

play(a::Abram, b::Dima, c::Kohen) = "Abram, Dima and Kohen often play together"
# uncomment this to see what happen
# play(a::Abram, b::Dima, c::Kitty) = "Abram and Dima play with Kitty too"

# Playground

bird = Bird("bird")
cat = Cat("cat")
kohen = Kohen()
kitty = Kitty()
abram = Abram()
dima = Dima()

println("There is a cat and a bird in the Zoo")
println("The cat is ", kitty)
println("The bird is ", kohen)
println("Normally, ", play(bird, cat))
println("And, ", play(cat, bird))
println("However, ", play(kitty, kohen))
println("And, ", play(kohen, kitty))
print("Can $(name(kohen)) fly? ")
println(if flyable(kohen) "Yes." else "Nope." end)
println("That's why...")

println("The family of bear also lives in the Zoo")
println("Do we have Green Bear? ", color(AbstractBear{Green}))
println("What do we have? ", color(AbstractBear{Brown}), " Bear and ", color(AbstractBear{White}), " Bear.")
println(play(abram, dima, kohen))
println(play(abram, dima, kitty))