class Solution
{
public:
    int numJewelsInStones(string J, string S)
    {
        int result = 0;
        for (char x : J)
        {
            for (char c : S)
            {
                if (x == c)
                    result++;
            }
        }
        return result;
    }
};