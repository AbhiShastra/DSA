# AI Code Review Setup Guide

## 🤖 How to Enable AI Code Review for Your Repository

### **Option 1: Quick Setup (Recommended)**

#### **Step 1: Get OpenAI API Key**
1. Go to [OpenAI API Keys](https://platform.openai.com/api-keys)
2. Create a new API key
3. Copy the key (starts with `sk-...`)

#### **Step 2: Add Secret to GitHub**
1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `OPENAI_API_KEY`
5. Value: Your OpenAI API key
6. Click **Add secret**

#### **Step 3: Enable the Workflow**
The AI review workflow is already in your repository! Just:
1. Create a new PR
2. The AI will automatically review your code
3. Look for AI comments on your PR

---

### **Option 2: Free Alternatives (No API Key Required)**

#### **CodeRabbit (Free for Open Source)**
1. Go to [CodeRabbit.ai](https://coderabbit.ai)
2. Sign up with your GitHub account
3. Install the CodeRabbit app on your repository
4. Enable it for pull requests

#### **Codeium (Free)**
1. Install the [Codeium GitHub App](https://github.com/apps/codeium)
2. Grant permissions to your repository
3. It will automatically review PRs

---

### **What AI Review Will Check:**

✅ **Algorithm Efficiency**
- Time complexity analysis
- Space complexity analysis
- Performance optimizations

✅ **Code Correctness**
- Logic errors
- Edge case handling
- Algorithm implementation

✅ **Best Practices**
- Code readability
- Documentation quality
- Error handling

✅ **Testing Quality**
- Test coverage
- Edge case testing
- Test structure

---

### **Sample AI Review Comments You'll See:**

```
🤖 AI Reviewer:
The binary search implementation looks good! However, I noticed:

1. **Missing Input Validation**: Consider adding null/undefined checks
2. **Edge Case**: What happens with an empty array? (Already handled ✅)
3. **Performance**: The recursive version has O(log n) space complexity due to call stack
4. **Documentation**: Consider adding examples in JSDoc comments

Overall: Well-implemented algorithm with good test coverage!
```

---

### **Troubleshooting:**

**❌ AI Review Not Working?**
1. Check that `OPENAI_API_KEY` is set in repository secrets
2. Ensure you have credits in your OpenAI account
3. Check the Actions tab for error logs

**❌ Workflow Not Triggering?**
1. Make sure the PR is against `main` or `master` branch
2. Check that GitHub Actions are enabled in repository settings

**❌ Permission Errors?**
1. Go to Settings → Actions → General
2. Set "Workflow permissions" to "Read and write permissions"

---

### **Cost Information:**

**OpenAI API Costs (Very Low):**
- GPT-3.5-turbo: ~$0.001 per code review
- GPT-4: ~$0.01 per code review

**Free Alternatives:**
- CodeRabbit: Free for open source
- Codeium: Free tier available
- GitHub Copilot: If you have a subscription

---

### **Testing the Setup:**

1. **Create a test PR** with intentional issues:
   ```javascript
   function badBinarySearch(arr, target) {
       // Missing input validation
       for(let i = 0; i < arr.length; i++) { // O(n) instead of O(log n)!
           if(arr[i] === target) return i;
       }
       return -1;
   }
   ```

2. **The AI should catch:**
   - ❌ Not actually binary search (O(n) complexity)
   - ❌ Missing input validation
   - ❌ No documentation

3. **If AI comments appear → Setup successful! 🎉**

---

### **Advanced Configuration:**

You can customize the AI review by editing `.github/workflows/simple-ai-review.yml`:

```yaml
custom_prompt: |
  You are a senior software engineer reviewing Data Structures and Algorithms code.
  
  Focus on:
  1. Big O complexity analysis
  2. Memory usage optimization
  3. Edge cases and error handling
  4. Code maintainability
  
  Be constructive and educational in your feedback.
```

Ready to get AI-powered code reviews? Follow Step 1-3 above! 🚀 