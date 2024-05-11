chrome.action.onClicked.addListener((tab) => {
    const url = new URL(tab.url);
    console.log('Extension icon clicked, current tab URL is:', tab.url);
    // Check if we're on the correct LeetCode problem page
    if (url.hostname === 'leetcode.com' && url.pathname.includes('/problems/')) {
      const pathParts = url.pathname.split('/');
      const problemName = pathParts[2];
  
      // Construct the new URL for LeetCode CN solutions page
      const newUrl = `https://leetcode.cn/problems/${problemName}/solutions/`;
  
      // Create a new tab with the LeetCode CN solutions URL
      chrome.tabs.create({ url: newUrl });
    }
  });
  