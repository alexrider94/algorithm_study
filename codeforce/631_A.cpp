#include <bits/stdc++>

using namespace std;

void solve();

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int t;
    cin >> t;
    while(t--){
        solve();
    }
}

void solve()
{
    int n,x;
    cin >> n >> x;

    vector<int> v;

    for (int i = 0; i < n; ++i)
    {
        int a;
        cin >> a;
        v[a] = 1;
    }

    int ans = 0;
    for (int i = 1; v[i] || x > 0; ++i, ++ans)
    {
        if (v[i] == 0)
        {
            v[i] = 1;
            x--;
        }
    }

    cout << n << "\n";
}
