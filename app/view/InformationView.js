Ext.define('TestApp.view.InformationView', {
    extend: 'Ext.Panel',
	xtype: 'info',
	requires: [
        'Ext.Img'
    ],
	config: {
			layout: 'hbox',
			items: [
				{
				xtype: 'titlebar',
				docked: 'top',
				title: 'Personal Information',
				items: [
					{
                        xtype:'button',
                        text:'Back',
                        ui:'back',
						align: 'left',
                        action:'cancel'
                    },
					

				]
				},
				{
					xtype: 'image',
					src: 'http://static0.therichestimages.com/wp-content/uploads/2011/02/silhouette.jpg',
					
					flex: 1
				},
				{
					xtype: 'panel',
					flex: 2,
					html:    '<div class="x-list-normal"><div class="x-list-header" style="position: relative;">Contact Info</div></div>'+
                    '<div class="personal-info">'+
                   
     			    'Full Name: Altun Shukurlu<br />'+
                    'Phone: 1-260-431-7865<br />'+
					'Address: 4110 Crescent Ave Fort Wayne, IN 46815 <br />'+
					'Date of Birth: December 30, 1993 <br />'+

                    '</div>'+
					'<div class="x-list-normal"><div class="x-list-header" style="position: relative;">Social Media</div></div>'+
					
					'Facebook: 100000092641154<br />'+
                    'Twitter: altunshukurlu<br />'+
					'You Tube: altunsh <br />'+
				   
                    '</div>'+
					'<div class="x-list-normal"><div class="x-list-header" style="position: relative;">Criminal History</div></div>'+
                    '<div class="personal-info">'+
                    '</div>'
				}
			]
	}
});