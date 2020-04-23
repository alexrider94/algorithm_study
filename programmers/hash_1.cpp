#include <bits/stdc++.h>

using namespace std;

/*
이 문제의 경우 particiapnt에서는 참가자 이름 명단이, completion에서는 완주자 명단이 나오고
완주하지 못한 자의 문자를 return 해야한다.

효율성체크가 관건인데 for문을 두번 돌려서 각각의 요소들을 비교해가며 완주하지 못한자를 찾는방법의 경우
효율성체크에서 넘어가버려서 점수가 낮게나온다.

해결방법으로는 문자들을 먼저 정렬시키고 그러면 참가자와 완료자의 명단이 순서대로 같아지게 되고 
한번의 반복문으로 각각을 비교하여 만약 같지않은경우 완료하지못한사람을 찾아낼 수 있어서 그 사람을 return하면 된다.

STL vector자료형의 경우 요소의 첫부분은 begin(), 마지막은 end()로 나타낸다.
size()는 크기를 나타내고, 맨뒤의 요소를 push_back(data)은 추가 pop_back()은 제거한다.
*/

string solution(vector<string> participant, vector<string> completion){
    string answer = "";
    
    sort(participant.begin(), participant.end());
    sort(completion.begin(), completion.end());

    for(int i = 0; participant.size(); ++i){
        if(participant[i] != completion[i]){
            answer = participant[i];
        }
    }

    return answer;
}

int main(){
}