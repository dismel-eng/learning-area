def solve(numLegs, numHeads):
    for numChicks in range(0, numHeads + 1):
        for numSpider in range(0, numHeads + 1):
            numPigs = numHeads - numChicks - numSpider
            totLegs = 4*numPigs + 2*numChicks + 8*numSpider
            if(totLegs == numLegs):
                return (numPigs, numChicks, numSpider)
    return (None, None, None)

def barnYard():
    heads = int(input('Enter number of heads: '))
    legs = int(input('Enter number of legs: '))
    pigs, chickens, spiders = solve(legs, heads)
    if(pigs == None):
        print('there is no solution')
    else: 
        print('Number of pigs: ', pigs)
        print('Number of chickens: ', chickens)
        print('Number of spiders: ', spiders)

barnYard()
    