

#function areaCircle(radius)
# { return 3.142*radius*radiues}

#def-> pi

"""
Multi line comments 
Multi line comments 
Multi line comments 
"""

'''
Multi line comments 
Multi line comments 
Multi line comments 
'''

def area_cirlce(radius):
    ans= 3.142*pow(radius,2)
    #print(f"for circle of radius {radius} area is {ans}")
    return ans

def print_area_circle(radius):
    ans=area_cirlce(radius)
    

radius=int(input("Enter radiues"))
area_cirlce(radius)

#strongly typed 
new_f=area_cirlce

#Strongly typed languages
#String name="Richie"
#name=23
#rust -> c++
# 
radius=int(input("Enter radiues"))
new_f(radius)