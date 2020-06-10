#include <iostream>
using namespace std;

const int maxArr = 2e5;
int arr[maxArr];
int num;

void solve()
{
    num++;
    int n, k;
    cin >> n >> k;
    int rec = k;
    int ans = 0;
    for (int i = 0; i < n; ++i)
    {
        cin >> arr[i];
    }
    for (int i = 0; i < n; ++i)
    {
        // cout << rec << "\n";
        if (rec != arr[i])
        {
            rec = k;
        }
        if (rec == arr[i])
        {
            rec--;
            if (rec == 0)
            {
                ans++;
                rec = k;
            }
        }
    }
    cout << "Case #" << num << ": " << ans << "\n";
}

int main()
{
    int T;
    cin >> T;
    while (T--)
    {
        solve();
    }
    return 0;
}