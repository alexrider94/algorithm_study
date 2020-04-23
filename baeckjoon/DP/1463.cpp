#include <bits/stdc++.h>

using namespace std;

/* 1로 만들기
bottom-up방식으로 시작하여서 규칙3번부터 시작하고 규칙2번과 규칙1번중에 min을 이용하여서 답을 찾아낸다.
*/

int dp[100001];

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n, ans = 0;
    cin >> n;

    memset(dp, 0 , sizeof(int) * n+1);

    dp[1] = 0;
    for(int i = 2; i <= n; ++i){
        dp[i] = dp[i-1] + 1;
        //dp[2] = dp[1] + 1; = 1; dp[3] = dp[2] + 1; = 2; dp[4] = dp[3] + 1 = 3; dp[5] = dp[4] + 1 = 4;
        //dp[6] = d[[5] + 1; = 5;
        if(i%3==0){
            dp[i] = min(dp[i/3]+1, dp[i]);
            //dp[3] = min(dp[1]+1, dp[3]);
            //dp[6] = min(dp[2]+1, dp[6]);
        }
        if(i%2==0){
            dp[i] = min(dp[i/2]+1, dp[i]);
            //dp[6] = min(dp[3]+1, dp[6]);
        }
        ans = dp[i];
    }

    cout << ans;

    return 0;
}