
# Course developed by Alvin Zablan from Coderbyte #



# fibonacci recursive memoization

brute force implementation
def fib(n):
    if n <= 2: return 1
    else:
        return (fib(n-1) + fib(n-2))

print(fib(7))

# with memoization
memo = {}

def fib(n):
    
    if n in memo: return memo[n]
    if n <= 2:
        return 1

    else: 
        memo[n] = (fib(n-1) + fib(n-2))
    return memo[n]
 
print(fib(7))
print(fib(50))

# canSum
def canSum(target, numbers): 

    if target in memo: return memo[target]
    if target == 0: return True
    if target < 0: return False

    for i in numbers:
        remainder = target - i
        if (canSum(remainder, numbers) == True):
            memo[target] = True
            return True

    memo[target] = False
    return False

print(canSum(7, [2,3]))
print(canSum(7, [5,3,4,7]))
print(canSum(7, [2,4]))
print(canSum(8, [5,2,3]))
print(canSum(300, [7,14]))


# howSum
memo = {}
def howSum(target, numbers):
    
    if target in memo: return memo[target]
    if target == 0: return []
    if target < 0: return None

    for i in numbers: 
        remainder = target - i
        result = howSum(remainder, numbers)
        if result != None:
            result.append(i)
            memo[target] = result
            return memo[target]

    memo[target] = None
    return None

print(howSum(7, [5,2,3]))
print(howSum(7, [5,3,4,7]))
print(howSum(7, [2,4]))
print(howSum(7, [5,2,3]))
print(howSum(8, [5,2,3]))
print(howSum(300, [7,14]))
