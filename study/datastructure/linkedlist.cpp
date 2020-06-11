#include <iostream>

struct Node
{
public:
    int data;
    Node *tail;
};

class LinkedList
{
public:
    Node *LinkHead;
    Node *tempPoint;

    LinkedList()
    {
        LinkHead = NULL;
    }

    void create(int data)
    {
        Node *temp = new Node();

        temp->data = data;
        temp->tail = LinkHead;

        LinkHead = temp;
    }

    void print()
    {
        tempPoint = LinkHead;

        while (tempPoint->tail != NULL)
        {
            std::cout << tempPoint->data << "->";
            tempPoint = tempPoint->tail;
        }

        std::cout << tempPoint->data << "\n";
    }
};

int main()
{
    LinkedList *test = new LinkedList();

    test->create(1);
    test->create(2);
    test->create(3);

    test->print();
    return 0;
}