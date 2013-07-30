require 'pry'
# Done in JS? Now do it in Ruby.
numbersArray = Array(1..100)
numbersArray.each do |number|
  if ((number % 3 == 0) && (number % 5 == 0))
    number = "FizzBuzz"
  elsif (number % 3 == 0)
    number = "Fizz"
  elsif (number % 5 == 0)
    number = "Buzz"
  end
end

binding.pry