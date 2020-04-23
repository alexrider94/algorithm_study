#include <bits/stdc++.h>

using namespace std;

/*
계단 오름 문제
이 문제에서는 n의 입력을 받는데 n은 계단의 수를 말한다.
n이 2이면 12,45,48,44... 이 오름차순으로 계단이 될 수 있고 54는 계단이 될 수 없다.
n이 3인 경우의 총 계단수는 55개가 된다.
0부터 시작할 수 있다 했으니 0~9로 10개.
따라서 DP배열에 저장할때 dp[1][0]=1,dp[1][1]=1... 로 1로 선언해준다.
dp[n][0]로 맨뒤가 0일 경우는 0~9의 숫자가 다 올 수 있고 dp[n][1]은 1~9까지의 숫자가 올 수 있다.
*/
int dp[101][10];

void solve(){

}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n,sum=0;
    cin >> n;
    for (int i = 0; i <= 9; ++i)
    {
        dp[1][i] = 1;
    }

    for (int i = 2; i <= n; ++i)
    {
        for (int j = 0; j <= 9; ++j)
        {
            for (int k = j; k <= 9; ++k)
            {
                dp[i][k] += dp[i - 1][j];   // j=0에서 k=0부터 dp[2][0],dp[2][1]...에 1이 들어가고
                                            // k=1에서 dp[2][1],dp[2][2]...에 1이 또 추가. 
                dp[i][k] %= 10007;
            }
        }
    }

    for(int i = 0; i <= 9; ++i){
        sum += dp[n][i];
    } 

    cout << sum ;

    return 0;
}