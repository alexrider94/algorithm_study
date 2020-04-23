#include <bits/stdc++.h>

using namespace std;
/*
    피보나치 함수
    fib(n)을 호출할 경우 fib(1)과 fib(0)이 얼마나 출력됬는지 나오게 하는 프로그램
    fin(n) = fib(n-1) + fib(n-2);
 */

int dp[41];

int fib(int n){
    if (n==0){
        dp[0] = 0;
        return 0;
    }
    else if (n==1){
        dp[1] = 1;
        return 1;
    }
    if(dp[n] != 0){
        return dp[n];
    }
    else{
        return dp[n] = fib(n-1) + fib(n-2);
    } 
}

int solution(int n){
    if(n==0){
        cout << 1 << " " << 0 << "\n";
    }
    else if(n==1){
        cout << 0 << " " << 1 << "\n";
    }
    else{
        fib(n);
        cout << dp[n-1] << " " << dp[n] << "\n";
    }
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(0);

    int t, n, ans = 0 ;
    cin >> t;
    while(t--){
        cin >> n;
        solution(n);
    }

    return 0;
}