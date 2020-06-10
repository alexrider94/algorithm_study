#include <iostream>

using namespace std;

/*
    Quick Sort
    1.nlongn
    2.pivot
    3.seperate algoritms used
    4.unsafe
*/
void quicksort(int *arr, int start, int end)
{
    if (start >= end)
    {
        return; // 1
    }

    int pivot = start;
    int left = pivot + 1;
    int right = end;

    while (left <= right)
    {
        while (left <= end && arr[left] <= arr[pivot])
        {
            left++;
        }
        while (right > start && arr[right] >= arr[pivot])
        {
            right--;
        }

        if (left > right)
        {
            int temp = arr[right];
            arr[right] = arr[pivot];
            arr[pivot] = temp;
        }
        else
        {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }
    }

    quicksort(arr, start, right - 1);
    quicksort(arr, right + 1, end);
}

int main()
{
    int arr[4] = {1, 5, 3, 2};

    quicksort(arr, 0, 3);

    for (int i = 0; i < 4; ++i)
    {
        cout << arr[i]
             << "\n";
    }
    return 0;
}