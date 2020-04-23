#include <stdio.h>

using namespace std;

int main(){

    int n,m;
    int s = 0;
    scanf("%d %d",&n,&m);
    while(n >= m){
        n -= m;
        ++s;
    }

    printf("%d\n%d",s,n);
    return 0;
}

//에러

