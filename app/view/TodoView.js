Ext.define("TestApp.view.TodoView", {
    extend: 'Ext.dataview.List',
    xtype: 'todolist',
    
    requires: ['TestApp.store.TodoStore'],
    			
	config: {
		id: 'taskList',
	    store: 'TodoStore',
		itemTpl: '{title} <small><font color="red">{dueDate:date("F j, Y"}</font></small>',
		onItemDisclosure: true,
		emptyText: '<h3> There must be something that you have to do! </h3>',
		grouped: true, 
	
	},
	constructor : function(config){
		this.callParent(arguments); 
		this.add({
				xtype: 'titlebar',
				docked: 'top',
				title: 'To do',
				items: [
					{
						itemId: 'addButton',
						iconCls: 'add',
						iconMask: true,
						align: 'left',
						action: 'createTask'
					},
						
					{
                        xtype:'button',
                        text:'Click Me!',
						ui: 'action',
                        action:'generateQuote',
						align: 'right',
                    }

				]
		}); 
		
		
		
	}
});

