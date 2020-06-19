class Solution
{
public:
    bool checkStraightLine(vector<vector<int>> &coordinates)
    {
        int len = coordinates.size();
        int x = coordinates[1][0] - coordinates[0][0];
        int y = coordinates[1][1] - coordinates[0][1];
        int curX, curY;
        for (int i = 2; i < len; ++i)
        {
            curX = coordinates[i][0] - coordinates[i - 1][0];
            curY = coordinates[i][1] - coordinates[i - 1][1];
            if (y * curX != x * curY)
                return false;
        }
        return true;
    }
};