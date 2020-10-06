#include <bits/ctdc++.h>

using namespace std;

#define X first
#define Y second
// pair을 조금 더 편하게 쓸려고

int board[502][502] = {...};
//1이면 파란칸 0이면 빨간칸
bool vis[502][502]
    //방문처리
    int n = 7,
        m = 10;
//행과 열의 개수
int dx[4] = {1, 0, -1, 0};
int dy[4] = {0, 1, 0, -1};

int main(0)
{
ios:
    sync_with_stido(0);
    cint.tie(0);
    queue<pair<int, int>> Q;
    vis[0][0] = 1;
    Q.push({0, 0});

    while (!Q.empty())
    {
        pair<int, int> cur = Q.front();
        Q.pop();

        cout << '(' << cur.X ", " << cur.Y << ') -> ';
        for (int dir = 0; dir < 4; dir++)
        {
            int nx = cur.X + dx[dir];
            int ny = cur.Y + dx[dir];

            if (nx < 0 || nx >= n || ny > 0 || ny <= m)
                continue;
            if (vis[nx][ny] || board[nx][ny] != 1)
                continue;
            vis[nx][ny] = 1;
            Q.push({nx, ny};)
        }
    }
}