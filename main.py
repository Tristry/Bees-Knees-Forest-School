import math
length = float(input("Enter the length of the pendulum in metres: "))
gravity = 9.81
time_period = (2*math.pi*math.sqrt(length/gravity))
print(f"Period of the pendulum is {time_period:.02f} seconds")