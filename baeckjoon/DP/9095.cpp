#include <bits/stdc++.h>

using namespace std;
/*
    1,2,3 더하기
    n의 숫자를 1,2,3의 숫자를 통하여서 만들어낼 수 있는 갯수 찾기.
    dp[1] = 1;
    dp[2] = 1+1, 2 = 2;
    dp[3] = 1+1+1, 1+2, 2+1, 3 = 4;
    dp[4] = 1+1+1+1, 2+2, 1+2+1, 1+3, 3+1, 2+1+1, 1+1+2 = 7;

    1,2,3만의 합으로만 이루어지기 때문에 dp[n] = dp[n-1] + dp[n-2] +dp[n-3];
 */

int dp[11];

int solution(int n){
    memset(dp, 0, sizeof(int) * n);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    for(int i = 4; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
    }
    return dp[n];
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(0);

    int t, n, ans = 0 ;
    cin >> t;
    while(t--){
        cin >> n;
        ans = solution(n);
        cout << ans << "\n";
    }

    return 0;
}