#include <iostream>
#include <string>
#include <vector>

using namespace std;

/*int 배열로 받는데 입력형식에 숫자가 붙어서 다 int형에 하나에 엄청큰숫자가 들어가버려서 오버플로우가 발생했다. 고치는 방법으로는 char로 사용
scanf("%1d",배열값) 으로 할려고했는데 잘 안된다. */

//테스트값
//01110010101101010000010100001011101110100010111001000000101000110001011010010110010010100000001001010110001010001000111111011100
//72b5:050b:ba2e:40a3:1696:4a02:5628:8fdc

string makeHex(int data)
{
    string c;
    if (data == 10)
    {
        c = 'a';
    }
    else if (data == 11)
    {
        c = 'b';
    }
    else if (data == 12)
    {
        c = 'c';
    }
    else if (data == 13)
    {
        c = 'd';
    }
    else if (data == 14)
    {
        c = 'e';
    }
    else if (data == 15)
    {
        c = 'f';
    }
    else
        c = to_string(data);
    return c;
}

int main()
{
    vector<char> bits(128);
    string result = "";
    for (int i = 0; i < 128; ++i)
    {
        cin >> bits[i];
    }
    for (int i = 0; i < 32; ++i)
    {
        int a = 0;
        for (int j = i * 4; j < (4 * i) + 4; ++j)
        {
            if ((j % 4) == 0)
            {
                a += (bits[j] - '0') * 8;
            }
            else if ((j % 4) == 1)
            {
                a += (bits[j] - '0') * 4;
            }
            else if ((j % 4) == 2)
            {
                a += (bits[j] - '0') * 2;
            }
            else if ((j % 4) == 3)
            {
                a += (bits[j] - '0');
            }
        }
        result += makeHex(a);
        if (i % 4 == 3 && i != 31)
        {
            result += ":";
        }
    }
    cout << result;

    return 0;
}