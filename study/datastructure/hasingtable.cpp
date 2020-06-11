#include <iostream>

using namespace std;

#define MAX_HASH 10
#define HASH_KEY(key) key % MAX_HASH

struct Node
{
public:
    int data;
    Node *next;
};

Node *hashTable[MAX_HASH];

void addHashData(int key, Node *node)
{
    int hash_key = HASH_KEY(key);
    if (hashTable[hash_key] == NULL)
    {
        hashTable[hash_key] = node;
    }
    else
    {
        node->next = hashTable[hash_key];
        hashTable[hash_key] = node;
    }
}
void deleteHashData(int data)
{
    int hashKey = HASH_KEY(data);

    if (hashTable[hashKey] == NULL)
    {
        return;
    }

    Node *deleteNode = NULL;
    if (hashTable[hashKey]->data = data)
    {
        deleteNode = hashTable[hashKey];
        hashTable[hashKey] = hashTable[hashKey]->next;
    }
    else
    {
        Node *node = hashTable[hashKey];
        Node *next = node->next;
        while (next)
        {
            if (next->data == data)
            {
                node->next = next->next;
                deleteNode = next;
                break;
            }
            node = next;
            next = node->next;
        }
    }
    free(deleteNode);
}

Node *findHashData(int data)
{
    int hashKey = HASH_KEY(data);
    if (hashTable[hashKey] == NULL)
    {
        return NULL;
    }

    if (hashTable[hashKey]->data == data)
    {
        return hashTable[hashKey];
    }
    else
    {
        Node *node = hashTable[hashKey];
        while (node->next)
        {
            if (node->next->data == data)
            {
                return node->next;
            }
            node = node->next;
        }
    }
    return NULL;
}

void printAllHashData()
{
    for (int i = 0; i < MAX_HASH; ++i)
    {
        cout << "index : " << i << "\n";
        if (hashTable[i] != NULL)
        {
            Node *node = hashTable[i];
            while (node->next)
            {
                cout << node->data << " ";
                node = node->next;
            }
            cout << node->data << "\n";
        }
    }
}

int main()
{
    int saveidx[101] = {
        0,
    };
    for (int i = 0; i < 100; i++)
    {
        Node *node = (Node *)malloc(sizeof(Node));
        node->data = rand() % 1000;
        node->next = NULL;
        addHashData(node->data, node);
        saveidx[i] = node->data;
    }
    printAllHashData();
    return 0;
}