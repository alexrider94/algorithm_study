#include <iostream>

using namespace std;
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};
 
int depth = 0;

int checkDepth(TreeNode *x, int value){
    TreeNode *temp = x;
    int parentValue = 0;
    while(temp->left){
        if(x->val==value){
            parentValue = temp->val;
            return parentValue;
        }
        temp = temp->left;
        depth++;
    }
    while(temp->right){
        if(temp->val==value){
            parentValue = temp->val;
            return parentValue;
        }
        temp = temp->right;
        depth++;
    }
    return parentValue;
}


class Solution {
public:
    bool isCousins(TreeNode* root, int x, int y) {
        int check = 0;
        int depthX = 0,depthY = 0;
        int xParent = checkDepth(root, x);
        depthX = depth;
        depth = 0;
        int yParent = checkDepth(root, y);
        depthY = depth;
        depth = 0;
        cout << depthX << "    " << depthY << "\n";
        if(depthX == depthY) {
            if(xParent == yParent){
                return 1;
            }
        }
        return -1;
    }
};