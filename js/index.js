$(document).ready(function () {
	$('.show-hide a').on('click', function(){
		$('.show-hide p').toggle();
	});
	$('.fade-in-out a').click(function(){
		$('.fade-in-out p').fadeToggle(3000);
	});

	var flag = true;
	$('.fade-to a').click(function(){
		if (flag) {
			$('.fade-to p').fadeTo("slow", 0.3);
			flag = !flag;
		} else {
			$('.fade-to p').fadeTo("slow", 1);
			flag = !flag;
		}
	});

	$('.slide-up-down a').click(function(){
		$('.slide-up-down p').slideToggle(1000, function(){
			console.log(1);
		});
	});
	$('.animate a').click(function(){
		if (flag){
			$('.animate p').animate({fontSize : '+=2px'});
			flag = !flag;
		} else {
			$('.animate p').animate({fontSize : '-=1px'});
			flag = !flag;
		}
	});
	$('.animate-toggle a').click(function(){
		$('.animate-toggle p').animate({height : 'toggle'});
	});

	$('.animate-queue').click(function(){
		$(this).animate({left: '100px'}, "slow");
		$(this).animate({top: '100px'}, "slow");
		$(this).animate({width: '200px'}, "slow");
		$(this).animate({height: '200px'}, "slow");
	});

	$('.animate-control .start').click(function(){
		$('.animate-queue').animate({left: '100px'}, "slow");
		$('.animate-queue').animate({top: '100px'}, "slow");
		$('.animate-queue').animate({width: '200px'}, "slow");
		$('.animate-queue').animate({height: '200px'}, "slow");
	});
	$('.animate-control .stop').click(function(){
		$('.animate-queue').stop(false,true);

		//$(selector).stop(stopAll,goToEnd);
		// 可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。
		// 可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。
	});

	$('.animate-control .chain').click(function(){
		$('.animate-chain').animate({width: '300px'}).slideUp().slideDown().animate({height: '200px'}).fadeTo(3000, 0.5);
	});

	$('.set-text').click(function(){
		$('.text').text('文本已经被改变！');
	});
	$('.set-html').click(function(){
		$('.html').html('<ul><li>list first</li><li>list second</li><li>list three</li><li>链接变成了列表</li></ul>');
	});
	$('.set-val').click(function(){
		$('.val').val('文本已经被改变！');
	});
	$('.get-attr').click(function(){
		var attr = $('.attr').attr('href');
		$('.attr-content span').html(attr);
	})
	$('.append-content .add-pre').click(function(){
		$('.append').append('&lt;end&gt;');
		$('.append').prepend('&lt;start&gt');
		var str = "<ul><li>list 1</li><li>list 1</li><li>list 1</li><li>list 1</li></ul>";
		$('.append').append( '包含在元素p中' + str );
		$('.append').after( '与元素p是相邻元素' + str );
		$('.append').before( '与元素p是相邻元素' + str );
	})

	$('.delete-content .del-pre').click(function(){
		// $('.delete').empty();
		$('.delete span').remove('.del');
	});

	$('.toggle-class .add-class').click(function(){
		console.log($('.toggle-class p').css('background-color'));
		$('.toggle-class p').toggleClass('class');
	});


});