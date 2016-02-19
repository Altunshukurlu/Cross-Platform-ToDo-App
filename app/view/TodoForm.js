
Ext.define('TestApp.view.TodoForm', {
    extend:'Ext.form.Panel',
	xtype: 'addTask',

    config:{
		id: 'todoForm',
        items:[
            {
                xtype:'titlebar',
                docked:'top',
                title:'Task',

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
                        text:'Save',
						ui: 'confirm',
                        action:'saveTask',
						align: 'right',
                    }

                ]
            },
            {
                xtype:'fieldset',
                id:'mainFieldset',
                title:'Task Details',
                items:[
                    {
                        xtype:'textfield',
                        id:'titleField',
                        label:'Title',
                        name:'title',
                        autoCapitalize:true,
                        placeHolder:'Enter a title'
                    },
					{
						xtype: 'selectfield',
                        id:'priorityField',
						name: 'priority',
						label: 'Priority',
						options: [
							{
								text: 'High',
								value: 'High'
							},
							{
								text: 'Medium',
								value: 'Medium'
							},
							{
								text: 'Low',
								value: 'Not Important'
							},
						]
					},
                    {
                        xtype:'textareafield',
                        id:'descriptionField',
                        label:'Description',
                        name:'description',
                        autoCapitalize:true,
                        placeHolder:'Enter a description'
                    },
					
                    {
                        xtype:'datepickerfield',
                        id:'dateField',
                        label:'Due on',
                        name:'dueDate',
                        placeHolder:'dd/mm/yyyy',
                        dateFormat:'D d M Y',
                        picker:{
                            slotOrder:['day', 'month', 'year'],
                            yearFrom:(new Date().getFullYear()),
                            yearTo:(new Date().getFullYear()) + 5
                        }
                    },
					
                    {
                        xtype:'togglefield',
                        id:'completedField',
                        label:'Done',
                        name:'completed'
                    }
                ]
            },
            {
                xtype:'fieldset',
                id:'todoFormDeleteFieldset',
				hidden: true,
                title:'Actions',
					items:[
                    {
                        xtype:'button',
                        height:70,
                        id:'deleteButton',
                        ui:'decline',
                        text:'Delete this task',
                        action:'deleteTask'
                    }
                ]
            }
        ]

    }

});