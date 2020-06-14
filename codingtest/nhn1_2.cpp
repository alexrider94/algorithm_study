#include <iostream>
#include <vector>

using namespace std;

int main()
{
    int N, M, D, ans; //N =깁스 총 날짜, M =병원가야하는 일 수, D = 근손실이 일어나지않는 최소 일수
                      //H = 병원 가야하는 날짜
    cin >> N >> M >> D;
    vector<int> H(N, 0);
    for (int i = 0; i < M; ++i)
    {
        int j = 0;
        cin >> j;
        H[j]++;
    }
    int c = 0;
    int c2 = 0;
    ans = D;
    for (int i = 0; i < N; ++i)
    {
        if (H[i] == 1)
        { //병원가는날
            c++;
        }
        if (c >= D)
        {
            ans = -1;
        }
    }

    cout << ans;

    return 0;
}