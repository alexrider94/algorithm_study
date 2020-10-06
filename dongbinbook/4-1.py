# N = int(input())

# list = input().split()
# x,y = 1,1
# direct = ['L','R','U','D']
# for way in list:
#     if direct[0] == way :
#         y = y - 1
#     elif direct[1] == way :
#         y = y + 1
#     elif direct[2] == way :
#         x = x - 1
#     elif direct[3] == way : 
#         x = x + 1
        


# print(x, y)

n = int(input())
x,y = 1,1
plans = input().split()

dx = [0,0,-1,1]
dy = [-1,1,0,0]
move_types = ['L','R','U','D']

for plan in plans:
    for i in range(len(move_types)):
        if plan == move_types[i]:
            nx = x + dx[i]
            ny = y + dy[i]
    
    if(nx<1 or ny<1 or nx> n or ny>n):
        continue
    x,y= nx,ny

print(x,y)


