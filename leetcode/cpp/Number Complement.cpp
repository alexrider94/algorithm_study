class Solution
{
public:
    int findComplement(int num)
    {
        int bitset = log2(num) + 1;
        int mask = unsigned(1 << bitset) - 1;
        return num ^ mask;
    }
};