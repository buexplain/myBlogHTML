layui.use(['element', 'jquery'], function() {
	var element = layui.element;
	var $ = layui.jquery;
	/* 汉堡按钮 开始 */
		$(".hamburger-btn").on('click', function() {
			$(".hamburger-nav").toggle();
		});
	/* 汉堡按钮 结束 */
});
