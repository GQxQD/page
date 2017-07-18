var app = new Vue({
    el: '#app',
    data: {
        title: '在线留言板',
        data: null
    },
    methods: {
        getData: function () {
            this.$http.get('data/data.json').then(function (res) {
                if (res.ok) {
                    console.log('获取数据成功！');
                    this.data = res.body;
                } else {
                    console.log('获取数据失败！错误码为：' + res.status);
                    return;
                }
            }, function (res) {
                alert('请求数据失败！');
            });
            return 'get';
        }
    }
});