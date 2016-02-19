
Ext.define('TestApp.model.TodoModel', {
    extend: 'Ext.data.Model',
    config: {
        fields:[
            {
                name:'id',
                type:'int'
            },
            {
                name:'completed',
                type:'boolean'
            },
            {
                name:'title',
                type:'string'
            },
            {
                name:'description',
                type:'string'
            },
            {
                name:'dueDate',
                type:'date'
            },
			{
				name: 'priority',
				type: 'string',
			},
			
			{
				name: 'latitude',
				type: 'string',
			},
			{
				name: 'longitude',
				type: 'string',
			},
		
			
        ],
		validations: [
			{type: 'presence', name: 'priority'},
			{type: 'presence',   name: 'title'},
		],
 

        idProperty: 'id'
	
	}
});