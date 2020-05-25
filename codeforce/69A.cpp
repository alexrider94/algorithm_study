#include <iostream>
using namespace std;

int main()
{
    int N;
    cin >> N;
    int x, y, z, sumX = 0, sumY = 0, sumZ = 0;
    for (int i = 0; i < N; i++)
    {
        cin >> x >> y >> z;
        sumX += x;
        sumY += y;
        sumZ += z;
    }
    if (sumX + sumY + sumZ == 0)
    {
        cout << "YES"
             << "\n";
    }
    else
    {
        cout << "NO"
             << "\n";
    }
    return 0;
}
