class Solution
{
public:
    void dfs(vector<vector<int>> &image, int x, int y, int newColor, int target)
    {
        if (x == image.size() || y == image[0].size() || y < 0 || x < 0 || image[x][y] != target || image[x][y] == newColor)
            return;
        image[x][y] = newColor;
        dfs(image, x - 1, y, newColor, target);
        dfs(image, x + 1, y, newColor, target);
        dfs(image, x, y + 1, newColor, target);
        dfs(image, x, y - 1, newColor, target);
    }
    vector<vector<int>> floodFill(vector<vector<int>> &image, int sr, int sc, int newColor)
    {
        dfs(image, sr, sc, newColor, image[sr][sc]);
        return image;
    }
};