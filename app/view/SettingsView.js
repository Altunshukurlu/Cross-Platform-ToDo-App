
Ext.define('TestApp.view.SettingsView', {
    extend:'Ext.form.Panel',
	xtype: 'settings',
	requires: ['Ext.SegmentedButton', 
				'Ext.form.FieldSet',
				'Ext.field.Select',
				'Ext.field.DatePicker',
				'Ext.field.Toggle'
				], 
	config: {
		id: 'settingsView',
		activeItem: 0,
		tabBar: {
			ui: 'neutral',
			layout: {
				pack: 'center'
			}
		},
		items: [
			{
                xtype:'titlebar',
                docked:'top',
                title:'Settings',

                items:[
                    {
                        xtype:'button',
                        text:'Back',
                        ui:'back',
						align: 'left',
                        action:'cancel'
                    },
                    {
                        xtype:'button',
                        text:'Reset Data',
						ui: 'decline',
                        action:'resetStore',
						align: 'right',
                    }

                ]
            },
			{
				xtype: 'panel',
				items : [
					{
						xtype: 'fieldset',
						id: 'selectGrouping',
						title: 'Select Grouping', 
						items:[{
						xtype: 'segmentedbutton',
						allowDepress: true,
							items: [
								{
									name: 'groupingType',
									value: 'completed',
									text: 'Completed',
									width: '25%',
								},
								{
									name: 'groupingType',
									value: 'priority',
									text: 'Priority',
									width: '25%',

								},
								{
									name: 'groupingType',
									value: 'title',
									text: 'Title',
									width: '25%',

								},
								{
									name: 'groupingType',
									value: 'dueDate',
									text: 'Due Date',
									width: '25%',
								},
							]
						}]
						
					},
					{
						xtype: 'fieldset',
						id: 'selectSorting',
						title: 'Select Sorting', 
						items:[{
						xtype: 'segmentedbutton',
						allowDepress: true,
							items: [
								{
									name: 'sortingType',
									value: 'completed',
									text: 'Completed',
									width: '25%',
								},
								{
									name: 'sortingType',
									value: 'priority',
									text: 'Priority',
									width: '25%',

								},
								{
									name: 'sortingType',
									value: 'title',
									text: 'Title',
									width: '25%',

								},
								{
									name: 'sortingType',
									value: 'dueDate',
									text: 'Due Date',
									width: '25%',
								},
							]
						}]
						
					},
					{
						xtype: 'fieldset',
						id: 'showCompleted',
						items:[{
							xtype: 'checkboxfield',
							name: 'hideCompleted',
							label: 'Hide Completed Tasks',
						}]
						
					}
				]
				},
			
			{	
				xtype: 'panel',
				defaults: {
					xtype: 'button',
					style: 'margin: 0.1em',
					flex: 1,
				},
				layout: {
					type: 'hbox',
				},
				items : [
					{
						height: 72,
						text: 'Save Settings',
						ui: 'confirm',
						id: 'saveSettingsButton',
						action: 'saveSettings',
						
					},
					{
						text: 'Reset Fields',
						ui: 'action',
						handler: function(){
							Ext.getCmp('settingsView').reset();
							Ext.ComponentQuery.query('segmentedbutton')[0].setPressedButtons([]);
							Ext.ComponentQuery.query('segmentedbutton')[1].setPressedButtons([]);

						}
					}
				]
			},	
		
		]
	}
    

});