Ext.define('TestApp.store.TodoStore', {
	extend: 'Ext.data.Store',

	requires: ['TestApp.model.TodoModel',
				'Ext.data.proxy.LocalStorage'],

     config: {
		  proxy: {
			  type: 'localstorage',
			  id: 'TodoStore'
		  },
		  storeId: 'TodoStore',
		  model: 'TestApp.model.TodoModel',
		  autoLoad: true,
		  autoSync: true,
		  grouper: {
			  groupFn: function(record) {
				 return record.get('completed') ? "Complete" : "Tasks";
			  },
			  
			  sortProperty: 'completed'
		   },
		  groupDir: 'ASC',
		  sorters: [			 
				{
				  property: 'title',
				  direction: 'ASC'
			  }
		  ],
		  filters:[
            new Ext.util.Filter({
                filterFn: function(item) {
                    return item;
                }
            })
          ],


  }

		
});