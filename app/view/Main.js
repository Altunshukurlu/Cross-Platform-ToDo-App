Ext.define('TestApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {

 		fullscreen: true, 
        tabBarPosition: 'bottom',
		style: {
			background: 'red',
		},
        items: [
            {

                title: 'To Do',
                iconCls: 'calendar',
				xtype: 'todolist',
                styleHtmlContent: true,
                scrollable: true,
            },
            {
                title: 'Add Task',
                iconCls: 'add',
				xtype: 'addTask',
                styleHtmlContent: true,
                scrollable: true,
				listeners : {
						activate : function() {
						var newTask = Ext.create('TestApp.model.TodoModel', {
							title: '',
							description: '',
							priority: 'Low',
							completed: false,
							dueDate: new Date()
						});

						Ext.ComponentQuery.query('#todoForm')[0].setRecord(newTask);
						}
				}

            }, 
			{
				title: 'Location',
				iconCls: 'locate',
				xtype: 'location'
			
			},
			{
                title: 'Settings',
                iconCls: 'settings',
				xtype: 'settings',
                styleHtmlContent: true,
                scrollable: true,
            },
			{
                title: 'Info',
                iconCls: 'info',
				xtype: 'info',
                styleHtmlContent: true,
                scrollable: true,
				
            },
			
        ]
    }
});
