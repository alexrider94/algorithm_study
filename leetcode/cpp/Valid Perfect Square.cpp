class Solution
{
public:
    bool isPerfectSquare(int num)
    {
        bool check = false;
        for (int i = 0; i <= (num / 2) + 1; ++i)
        {
            if ((long)i * i == (long)num)
            {
                check = true;
                return check;
            }
        }
        return check;
    }
};