Ext.define('TestApp.view.LocationView', {

	extend: 'Ext.Container',
	requires: 'Ext.Map',

	xtype: 'location',

	config: {


		layout: 'fit',

		items: [
			{
				docked: 'top',
				xtype: 'toolbar',
				title: 'Location',
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
				xtype: 'map',
			
				id: 'taskMap',
				useCurrentLocation: true,
				mapOptions: {
					mapTypeId: google.maps.MapTypeId.ROADMAP
				},
			
			
			listeners: {
					maprender: function(component, map) {
						var store = Ext.getStore("TodoStore");
						var length = store.getCount(); 
						var records = store.data.items; 
						var index; 
						    var image = new google.maps.MarkerImage(
								'resources/images/point.png',
							new google.maps.Size(32, 31),
							new google.maps.Point(0, 0),
							new google.maps.Point(16, 31)
						);

						        var marker = new google.maps.Marker({
									position: map.center,
									map: map,
									icon: image,
								})
								google.maps.event.addListener(marker, 'click', function() { 
									var infoWindow = new google.maps.InfoWindow({ content: "CURRENT LOCATION!" });
									infoWindow.open(map, marker);
								}); 

						for(index = 0; index < length; index++){
							var pos = new google.maps.LatLng(records[index].get('latitude'), records[index].get('longitude'));
							var info = ' ' + records[index].get('title') + '<br /><small>' + records[index].get('dueDate') + '<br />' + records[index].get('description') + '</small>';

							var s = createMarker(pos, info);
						}
						function createMarker(pos, info) {
							var marker = new google.maps.Marker({       
								position: pos, 
								map: map,  // google.maps.Map 
								visible: true
							}); 
							google.maps.event.addListener(marker, 'click', function() { 
							   var infoWindow = new google.maps.InfoWindow({ content: info });
							infoWindow.open(map, marker);
							}); 
							return marker;  
						}
					}, 
				}, 
			}
			
		
		]
	},
});
