$(document).ready(function () {
    b();
    $('#gotop').click(function () {
        $('body,html').animate({scrollTop: 0}, 300);
    });
//    if(navigator.userAgent.indexOf("MSIE")>0){
//        layer.alert('哎哟~~发现你在使用IE浏览器哦~~，本页面在IE下显示效果不佳，推荐使用Chrome~~',-1);
//    }

    $('#contact').click(function () {
		var contactTipPanel = '' +
            '<div class="contact-tip"><br />' +
                '<ul><nobr>' + contactTipPanelData.group.title + '</nobr>';
		
		for(i=0;i<contactTipPanelData.group.groups.length;i++){
			contactTipPanel = contactTipPanel + 
				'<li>' +
					'<a href="' + contactTipPanelData.group.groups[i].link + '" target="_blank"><nobr>' + contactTipPanelData.group.groups[i].title + '</nobr></a>' +
				'</li>';
		}
		contactTipPanel = contactTipPanel + 
				'</ul>' +
				'<ul><nobr>' + contactTipPanelData.email.title + '</nobr>' +
					'<li><nobr>' + contactTipPanelData.email.content + '</nobr></li>' +
				'</ul>' +
				'<br />' +
            '</div>';
		
        var contactTipPanel = '' +
            '<div class="contact-tip"><br />' +
                '<ul>翰飞传统文化协会交流群' +
                    '<li>' +
                        '<a href="https://jq.qq.com/?_wv=1027&k=5KbSL1z" target="_blank">367213835</a>' +
                    '</li>' +                   
                '</ul>' +
                '<ul>合作联系' +
                    '<li>hanfei@翰飞传统文化</li>' +
                '</ul>' +
                '<br />' +
            '</div>';
        contactTip = layer.tips(contactTipPanel,
            this, {
                style: ['background-color:#263238; color:#fff', '#263238'],
                time: 10,
                maxWidth: 240,
                maxHeight: 280
            });
    });
});
function b() {
    h = 200;
    t = $(document).scrollTop();
    if (t > h) {
        $('#gotop').fadeIn();
    } else {
        $('#gotop').fadeOut();
    }
}
$(window).scroll(function (e) {
    b();
});