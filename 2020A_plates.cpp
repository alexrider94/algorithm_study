#include <bits/stdc++.h>

using namespace std;

int n,k,p,a[50][30];
int dp[51][1501];

void solve()
{
    cin >> n >> k >> p;
    // n= stack of plates , k = plates of n , p= number to take plates
    memset(dp, 0xc0, sizeof(dp));
    dp[0][0] = 0;
    for(int i = 0; i<n; ++i){
        for(int j=0, sum=0; j<k; ++j){
            cin >> a[i][j];
            sum += a[i][j];

            for(int k=0; k+j+1<=p; ++k){
                dp[i+1][k+j+1] = max(dp[i][k]+sum, dp[i+1][k+j+1]);
            }
        }
    }
    cout << dp[n][p] << "\n";
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int T = 0;
    cin >> T;
    int n = 1;
    while (T--)
    {
        cout << "Case #" << n << ": ";
        solve();
        ++n;
    }

    return 0;
}