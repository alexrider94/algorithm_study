#include <iostream>

#define MAXVAULE 5;

using namespace std;

template <class T>
class Stack
{
private:
    int top;
    int size;
    T *value;

    Stack()
    {
        size = MAXVAULE;
        value = new T[size];
        top = -1;
    }
    ~Stack()
    {
        delete[] value;
    }

    void push(int value)
    {
        if (!isFull())
        {
            value[++top] = value;
        }
        else
        {
            return;
        }
    }

    int Top()
    {
        if (!empty())
        {
            return value[top];
        }
        else
        {
            return NULL;
        }
    }

    bool empty()
    {
        if (top < 0)
        {
            return true;
        }
        else
            return false;
    }

    bool isFull()
    {
        if (top > 0)
        {
            return true;
        }
        else
            return false;
    }
};

int main()
{
}