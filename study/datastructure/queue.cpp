#include <iostream>

using namespace std;

struct Node
{
    int data;
    Node *next;
};

Node *front = NULL;
Node *rear = NULL;

Node *temp;

void insertData(int data)
{
    if (rear == NULL)
    {
        rear = new Node();
        rear->next = NULL;
        rear->data = data;
        front = rear; //rear가 NULL이라는 건 아무것도 없다 따라서 같음
    }
    else
    {
        temp = new Node();
        rear->next = temp; //끝에 추가하는 거니까
        temp->data = data;
        temp->next = NULL;
        rear = temp; //끝은 temp가 된다
    }
}

void deleteData()
{
    temp = front;
    if (front == NULL)
    {
        return;
    }
    else
    {
        if (temp->next != NULL)
        {
            temp = temp->next;
            free(front);
            front = temp;
        }
        else
        {
            free(front);
            front = NULL;
            rear = NULL;
        }
    }
}

void display()
{
    temp = front;
    if ((front == NULL) && (rear == NULL))
    {
        cout << "queue is empty";
    }
    else
    {
        cout << "queue element : ";
        while (temp != NULL)
        {
            cout << temp->data << " ";
            temp = temp->next;
        }
    }
    cout << endl;
}

int main()
{
    display();

    insertData(1);
    insertData(2);
    insertData(3);

    display();

    deleteData();
    deleteData();

    display();

    insertData(5);

    display();

    return 0;
}
