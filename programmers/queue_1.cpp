#include <bits/stdc++.h>

using namespace std;

/*
    탑문제
*/

vector<int> solution(vector<int> heights)
{   
    vector<int> answer;
    stack<pair<int,int>> q;
    
    for(int i = 0; i<heights.size(); ++i){
        while(!q.empty()){
            if(q.top().second > heights[i]){
                answer.push_back(q.top().first);
                break;
            }
            q.pop();
        }
        if(q.empty()) answer.push_back(0);
        q.push(make_pair(i+1, heights[i]));
    }

    return answer;
}

int main(){
    vector<int> heights;
    vector<int> answer;
    
    heights.push_back(6);
    heights.push_back(9);
    heights.push_back(5);
    heights.push_back(1);
    heights.push_back(4);

    answer = solution(heights);
    for(int i = 0 ; i< answer.size(); ++i) {
        cout << answer[i] << "\n";
    }
    return 0;
}