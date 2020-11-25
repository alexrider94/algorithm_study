/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */

class Solution
{
    TreeNode *xParent = NULL;
    TreeNode *yParent = NULL;
    int xDepth = -1, yDepth = -1;

    void getDepthAndParent(TreeNode *root, int x, int y, int depth, TreeNode *parent)
    {
        if (root == NULL)
        {
            return;
        }
        if (root->val == x)
        {
            xParent = parent;
            xDepth = depth;
        }
        else if (root->val == y)
        {
            yParent = parent;
            yDepth = depth;
        }
        else
        {
            getDepthAndParent(root->left, x, y, depth + 1, root);
            getDepthAndParent(root->right, x, y, depth + 1, root);
        }
    }

public:
    bool isCousins(TreeNode *root, int x, int y)
    {
        getDepthAndParent(root, x, y, 0, NULL);
        return xDepth == yDepth && xParent != yParent ? true : false;
    }
};