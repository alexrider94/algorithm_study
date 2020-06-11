#include <iostream>

int sorted[4];

void merge(int *arr, int start, int mid, int end)
{

    int i = start;
    int j = mid + 1;
    int k = start;
    while (i <= mid && j <= end)
    {
        if (arr[i] <= arr[j])
        {
            sorted[k] = arr[i];
            i++;
        }
        else
        {
            sorted[k] = arr[j];
            j++;
        }
        k++;
    }

    if (i > mid)
    {
        for (int t = j; t <= end; t++)
        {
            sorted[k] = arr[t];
            k++;
        }
    }
    else
    {
        for (int t = i; t <= mid; t++)
        {
            sorted[k] = arr[t];
            k++;
        }
    }

    for (int t = start; t <= end; t++)
    {
        arr[t] = sorted[t];
    }
}

void mergesort(int *arr, int start, int end)
{
    if (start < end)
    {
        int mid = (start + end) / 2;
        mergesort(arr, start, mid);
        mergesort(arr, mid + 1, end);
        merge(arr, start, mid, end);
    }
}
int main()
{
    int arr[] = {3, 5, 6, 1};
    mergesort(arr, 0, 3);
    for (int i = 0; i < 4; ++i)
    {
        std::cout << arr[i] << "\n";
    }
    return 0;
}