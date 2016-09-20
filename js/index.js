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

	$('.ajax-load .load-btn').click(function(){
		$('.load-content').load('http://7u2grt.com1.z0.glb.clouddn.com/ajax.txt',function(responseTxt, statusTxt, xhr){
			if (statusTxt == "success") {
				console.log('load success!');
			}
			if (statusTxt == 'error') {
				console.log('error' + xhr.status + ',' + xhr.statusTxt)
			}
		});
	});

	$('.ajax-post .post-btn').click(function(){
		$.post('http://7u2grt.com1.z0.glb.clouddn.com/post.php', {
			name: "post exercise",
			url: 'http://www.runoob.com/jquery/jquery-ajax-get-post.html'
		},function(data, status){
			alert(data + ',加载状态为：' + status);
			$('.post-ajax').html(data + ',加载状态为：' + status)
		});
	});

	// $('.event-bind p').bind('mouseover mouseout', function(){
	// 	$(this).toggleClass('bind-text');
	// });
	// $('.event-bind .bind-click').bind('click', function(){
	// 	$('.event-bind p').css('background-color', 'yellow')
	// })
	$('.event-bind p').bind({
		click: function(){
			$(this).css('background-color', '#f40')
		},
		mouseover: function(){
			$(this).addClass('bind-text')
		},
		mouseout: function(){
			$(this).removeClass('bind-text')
		}
	})

	$('.event-blur .blur-text').blur(function(){
		if (!$(this).val()){
			alert('please input text')
		}
	})
	$('.event-change .change-text').change(function(){
		alert('text has been changed')
	})

	$('.event-delegate').delegate('.delegate-click', 'click', function(){
		$('.event-delegate p').css('background-color', 'green');
	})

	$('.current-target h1').on('click', function(){
		alert(event.currentTarget == this);
	})
	$('.event-data h1').each(function(i){
		$(this).on('click',{x : i}, function(event){
			alert($(event.currentTarget).index() + ',' + event.data.x)
		})
	})
	$('.event-delegate-target').on('click', 'h1', function(event){
		$(event.delegateTarget).css('background-color', 'red')
	})
	$('.prevent-default a').on('click', function(event){
		event.preventDefault();
		alert('链接a是否被阻止事件：' + (event.isDefaultPrevented() ? '是': '没有'))
	})

	$('.stop-immediate-propagation h1').on({
		click: function(event){
			$(event.currentTarget).css('background-color', 'yellow');
			event.stopImmediatePropagation()
			alert('剩下的事件处理程序是否被执行：' + (event.isImmediatePropagationStopped() ? 'NO' : 'Yes'))
		}
	})
	$('.stop-immediate-propagation h1').on({
		click: function(event){
			$(event.delegateTarget).css('padding', '20px')
		}
	})

	$('.stop-propagation span').on('click', function(){
		alert('span被点击！！！')
	})

	$('.stop-propagation p').on('click', function(event){
		alert('p被点击！！！')
		event.stopPropagation()
		alert('event.stopPropagation()是否阻止向div父元素冒泡：' + event.isPropagationStopped())
	})

	$('.stop-propagation div').on('click', function(){
		alert('div被点击！！！')
	})

	$('.name-space p').on('custosssm.myClick', function(event){
		alert(event.namespace);
	})

	$('.name-space p').click(function(){
		$(this).trigger('custosssm.myClick')
	})
	$('.name-space div').click(function(){
		$('.name-space p').off('custosssm.myClick')
	})
	$(document).on('mouseover', function(event){
		$('.page-x-y').find('span').eq(0).html(event.pageX)
		$('.page-x-y').find('span').eq(1).html(event.pageY)
	})
	$('.event-target h2, .event-target p, .event-target span').on('click', function(event){
		$('.event-target strong').html(event.target.nodeName);
	})

	$('.time-stamp .time-long-click').on('click', function(event){
		$('.time-stamp span.long-time').text(event.timeStamp);
	})
	var res;
	$('.time-stamp .time-short-click').on('click', function(event){
		if(res) {
			$('.time-stamp span.between-time').text(event.timeStamp - res);
		} else {
			$('.time-stamp span.between-time').text('请再点击一次')
		}
		res = event.timeStamp;
	})

	$('.which input').keydown(function(event){
		$('.which span').html(event.which);
	})
	$('.which input').keypress(function(event){
		alert(event.which)
	})

	$('.focus-in-out').focusin(function(){
		$(this).css('background-color', 'pink')
	})
	$('.focus-in-out').focusout(function(){
		$(this).css('background-color', 'red')
	})

	$('.focus-in-out').find('input').eq(0).focus(function(){
		$(this).css('background-color', 'red')
	})

	$('.focus-in-out').find('input').eq(1).focus(function(){
		$(this).css('background-color', 'blue')
	})

	$('.hover').hover(function(){
		$(this).css('background-color', 'yellow')
	})

	$('.mouse-up').mouseup(function(){
		alert('释放鼠标左键@！！！')
	})

	$('.one p').one('click' , function(){
		$(this).css({fontSize: "+=5px"})
	})

	$('.wrap-test button:first-child').on('click', function(){
		$('.wrap-test p').wrap('<div></div>')
	})

	$('.wrap-test button').eq(1).on('click', function(){
		$('.wrap-test p').unwrap()
	})

	$('.wrap-test button').eq(2).on('click', function(){
		$('.wrap-test p').wrapAll('<div></div>')
	})

	$('.wrap-test button').eq(3).bind('click', function(){
		$('.wrap-test p').wrapInner('<strong></strong>')
	})

	// var jq = $.noConflict();
	// jq('.no-conflict .conflict-btn').bind('click', function(){
	// 	jq('.no-conflict p').css('background-color', 'green');
	// });
});