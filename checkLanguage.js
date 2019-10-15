if (navigator.language === 'zh-CN' && !localStorage.isAskRegion) {
    localStorage.isAskRegion = true;
    if (confirm('你的浏览器语言设置的是中文，是否要跳转到中文官网？')) {
        location.href = 'https://cn.powerjson.org';
    }
}
