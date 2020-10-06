N = int(input())

count = 0
for i in range(N+1):
    for j in range(60):
        for k in range(60):
            if '3' in str(i) + str(j) + str (k):
                # 03시 20분 35초 이면 '032035'로 바꿔서 3이 포함되는지 확인.
                count += 1
print(count)