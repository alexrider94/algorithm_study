#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

/*
6
WWWWWW
LLWWWL
LLLWWL
LWWWLL
WLLWWW
WWWWLW

5
LWLWL
LLLWW
LWLWL
WLLWL
WWLWL

2
WL
LW
*/

bool desc(int a, int b)
{
    return a > b;
}

void dfs(vector<vector<char>> &M, int i, int j, int &count)
{
    int len = M.size();
    int n = M[0].size();
    if (i < 0 || i >= len || j < 0 || j >= n || M[i][j] == 'W')
    {
        return;
    }
    M[i][j] = 'W';
    count++;
    dfs(M, i + 1, j, count);
    dfs(M, i - 1, j, count);
    dfs(M, i, j + 1, count);
    dfs(M, i, j - 1, count);
}

// void show(vector<vector<char>> &M)
// {
//     int N = M.size();
//     for (int i = 0; i < N; ++i)
//     {
//         for (int j = 0; j < N; ++j)
//         {
//             cout << M[i][j];
//         }
//         cout << "\n";
//     }
//     cout << "\n\n";
// }

void solution(vector<vector<char>> &M)
{
    int landCount = 0;
    vector<int> list;
    for (int i = 0; i < M.size(); ++i)
    {
        for (int j = 0; j < M.size(); ++j)
        {
            if (M[i][j] == 'L')
            {
                int count = 0;
                dfs(M, i, j, count);
                list.push_back(count); //제일 큰 값은 대륙으로 처리. 모든 육지가 대륙이면 0으로 처리
            }
        }
    }
    sort(list.begin(), list.end(), desc);
    if (list.front() == list.back())
    {
        cout << 0 << " " << 0 << " " << 0.00 << " " << 0;
        return;
    }
    int continent = list.front();
    int minLand = list.back();
    int size = list.size();
    double sum = 0;
    int mid = 0;
    int midlen = (size - 1) / 2;
    //대륙 빼고 계산
    for (int i = 1; i < size; i++)
    {
        sum += list[i];
    }
    double avg = (sum / (size - 1));

    if ((size - 1) % 2 == 0)
    {
        mid = (list[midlen] + list[midlen + 1]) / 2;
    }
    else
    {
        mid = list[midlen + 1];
    }
    cout.setf(ios::fixed); //소수점 고정
    cout.precision(2);     // 소수점 둘째까지
    //가장큰 섬, 가장 작은섬, 평균값, 중간값
    cout << list[1] << " " << minLand << " " << avg << " " << mid;
}

int main()
{
    int N;
    cin >> N;
    vector<vector<char>> M;
    for (int i = 0; i < N; ++i)
    {
        vector<char> v(N);
        for (int j = 0; j < N; ++j)
        {
            cin >> v[j];
        }
        M.push_back(v);
    }

    solution(M);

    return 0;
}
