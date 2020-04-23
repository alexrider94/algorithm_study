#include <bits/stdc++.h>

using namespace std;

int dp[91];
/* 
백준 2193 문제
n=1이면 1
n=2이면 10
n=3이면 101, 100 
n=4이면 1010,1001,1000
n=5이면 10000,10101,10100,10010,10001
d(n) = d(n-1) + d(n-2) 
*/
int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    int n, ans = 0;
    cin >> n;
    dp[1] = 1;
    dp[2] = 1; 
    for(int i = 3; i<=n; ++i){
        dp[i] = dp[i-1]+ dp[i-2];
    }
    ans = dp[n];
    cout << ans ;
    return 0;
}