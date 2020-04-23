#include <bits/stdc++.h>

using namespace std;

int n,b,a[100000];

void solve() {

    cin >> n >> b;
    for(int i = 0; i<n; ++i){  
        cin >> a[i];
    }
    sort(a, a+n);
    int ans = 0;
    for(int i = 0; i<n; ++i){
        if(b >= a[i]){
            b = b - a[i];
            ans++;
        }
    }
    cout << ans << "\n";
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    int T = 0;
    cin >> T;
    int n = 1;
    while(T--){
        cout << "Case #" << n << ": ";
        solve();
        ++n;
    }

    return 0;
}