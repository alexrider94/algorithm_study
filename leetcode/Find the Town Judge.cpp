class Solution
{
public:
    int findJudge(int N, vector<vector<int>> &trust)
    {
        int judge = -1;
        vector<int> list(N + 1, 0);
        for (int i = 0; i < trust.size(); ++i)
        {
            list[trust[i][1]]++;
        }
        for (int i = 0; i < trust.size(); ++i)
        {
            if (list[trust[i][1]] == N - 1)
                judge = trust[i][1];
        }
        for (int i = 0; i < trust.size(); ++i)
        {
            if (trust[i][0] == judge)
                judge = -1;
        }
        if (trust.size() == 0 && N == 1)
            judge = 1;
        return judge;
    }
};