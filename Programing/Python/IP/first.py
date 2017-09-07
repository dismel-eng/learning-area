def sqrt(x):
    ans = 0
    if( x >= 0 ):
        while (ans*ans < x): 
            ans = ans + 1
        if(ans*ans != x):
            print(x, 'is not a perfect square')
        else:
            print(ans)
    else:
        print(x, 'is a negative number')

x = -2
sqrt(x)