''' 
    (Euclid's algorithm): Given two positive integers m and n, find the gretest common divisor, 
    that is, the largest positive integers that evenly divedes both m and n. 

    Analisys:


'''
class Euclid:
    def __init__(self,m, n):
        self.m = m
        self.n = n

    def GCD(self):        
        
        if(self.m < self.n):
            t = self.m
            self.m = self.n
            self.n = t
        
        r = self.m
        
        while r > 0:
            r = self.m % self.n
            if r == 0:
                return self.n
            else:
                self.m = self.n
                self.n = r
    
    def CDF(self):
        r = self.m
        
        while r > 0:
            r = self.m = self.m % self.n            
             
            if r == 0:
                return self.n
                
            r = self.n = self.n % r 
                        
            if r == 0:
                return self.m
            

m = 62
n = 36

e = Euclid(m, n)
print(e.CDF())
# print('The gretest common divisor between {0} and {1} is: {2}'.format(m, n, e))                    