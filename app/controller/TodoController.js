Ext.define('TestApp.controller.TodoController', {
    extend: 'Ext.app.Controller',
	requires: ['Ext.MessageBox', 'Ext.DateExtras'],

    config: {
        id: 'taskController',
        refs: {
			generateQuoteButton: 'button[action=generateQuote]',
			saveSettingsButton: 'button[action=saveSettings]',
            saveButton: 'button[action=saveTask]',
            createTaskButton: 'button[action=createTask]',
            todoForm: '#todoForm',
			settingsView: '#settingsView',
            todoFormDeleteFieldset: '#todoFormDeleteFieldset',
            taskList: '#taskList',
            cancelButton: 'button[action=cancel]',
            deleteButton: 'button[action=deleteTask]',
			resetButton: 'button[action=resetStore]',
        },
        control: {
			saveSettingsButton: {
				tap: 'saveSettings'
			},
			generateQuoteButton: {
				tap: 'generateQuote'
			},
			sortButton: {
				tap: 'sortTask',
				},
            saveButton: {
                tap: 'saveTask'
            },

            createTaskButton: {
                tap: 'createTask'
            },

            cancelButton: {
                tap: 'cancel'
            },

            taskList: {
                itemtap: 'showTask',
                disclose: 'changeDoneStatus'
            },

            deleteButton: {
                tap: 'deleteTask'
            },
			resetButton: {
                tap: 'resetStore',
            },
        }
    },
    saveSettings: function(button, e, eOpts) {
		var store = this.getTaskList().getStore();
		var grouping = Ext.ComponentQuery.query('segmentedbutton')[0].getPressedButtons()[0];
		var groupingType; 
		if(typeof grouping != 'undefined'){
			groupingType = grouping.config.value;
		}
		var sorting = Ext.ComponentQuery.query('segmentedbutton')[1].getPressedButtons()[0] ;
		var sortingType;
		if(typeof sorting != 'undefined'){
			var sortingType = sorting.config.value;
		}
		var hideCompleted = this.getSettingsView().getValues().hideCompleted; 
		
		if(hideCompleted){
			store.setFilters({
			
					filterFn: function(item) {
						return !item.get("completed");
					}
			});
			
		}else{
			store.setFilters({
				
						filterFn: function(item) {
							return item;
						}
				
				});
		}
		if(groupingType === 'priority'){
			store.setGrouper({
						  groupFn: function(record) {
								return record.get('priority');
						},
			  sortProperty: 'priority'

			});		store.setGroupDir('ASC');

		}else if(groupingType === 'title'){
			store.setGrouper({
						  groupFn: function(record) {
								return record.get('title')[0].toUpperCase();
						},

			});		store.setGroupDir('ASC');

		}else if(groupingType === 'dueDate'){
			store.setGrouper({
						  groupFn: function(record) {
								var date = record.get('dueDate');
								return date;
						},
			  sortProperty: 'dueDate'

			});		store.setGroupDir('ASC');

		}else{
			store.setGrouper({
						  groupFn: function(record) {
				 return record.get('completed') ? "Complete" : "Tasks";
						},
			  sortProperty: 'completed'

			});		store.setGroupDir('ASC');

		}
		if(sortingType === 'priority'){
			store.setSorters({
				  property: 'priority',
				  direction: 'ASC'

			});		
		}else if(sortingType === 'title'){
			store.setSorters({
				  property: 'title',
				  direction: 'ASC'

			});	
		}else if(sortingType === 'dueDate'){
			store.setSorters({
				  property: 'dueDate',
				  direction: 'ASC'

			});	
		}else {
			store.setSorters({
				  property: 'completed',
				  direction: 'ASC'

			});	
		}
		
		store.load();
		this.showList();
		
    },
	generateQuote: function(button, e, eOpts) {
		var store = Ext.getStore("QuoteStore");
		store.load(); 
		var size = store.getCount();
		var number = Math.floor(Math.random() * (size));
		var items = store.data.items;
		var record = items[number];
      
        Ext.Msg.alert('100 Things To Do', record.get('desc'));
		},
		

    resetStore: function(button, e, eOpts) {
        Ext.Msg.confirm('Delete all tasks?', 'You cannot undo this!', function (answer) {
			if(answer === 'yes'){
			Ext.Msg.confirm('Are you sure?', 'Nooooooooooooo!', function (answer) {
				if (answer === 'yes') {
					var store = this.getTaskList().getStore();
					store.removeAll();
					this.showList();
				}
			}, this);
			}
        }, this);
    },
	deleteTask: function(button, e, eOpts) {
		
        Ext.Msg.confirm('Delete this task?', 'You cannot undo this!', function (answer) {
            if (answer === 'yes') {
                var task = this.getTodoForm().getRecord();
                var store = this.getTaskList().getStore();
                store.remove(task);
                this.showList();
            }
        }, this);
		

    },

	
    changeDoneStatus: function (list, task, target, index, e, eOpts) {
        var done = task.get('completed');
        task.set('completed', !done);
		
		var store = Ext.getStore("TodoStore");
		store.load();
    },

    showTask: function(list, index, target, task, e, eOpts) {
        if (e.getTarget('.x-list-disclosure')) {
            return;
        }
        this.getTodoFormDeleteFieldset().setHidden(false);
        this.showForm();
		this.getTodoForm().setRecord(task);

    },

    cancel: function(button, e, eOpts) {
        this.showList();
    },

    saveTask: function (button, e, eOpts) {
        var store = this.getTaskList().getStore();
        var task = this.getTodoForm().getRecord();
        this.getTodoForm().updateRecord(task);
		var errors = task.validate();
		
		var geo = Ext.create('Ext.util.Geolocation', {
			 autoUpdate: false,
			 listeners: {
			  locationupdate: function(geo) {
				 var currentLat = geo.getLatitude();
				 var currentLng =  geo.getLongitude();
				task.set('latitude', currentLat + Math.floor(Math.random() * 100) / 1000000.0);
				task.set('longitude', currentLng + Math.floor(Math.random() * 100) / 100000.0);
				 var altitude = geo.getAltitude();
				 var speed = geo.getSpeed();
				 var heading= geo.getHeading();
				 var i; 
				 
			  },
			  locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
				 if(bTimeout)
				   Ext.Msg.alert('Timeout occurred',"Could not get current position");
				 else 
				   alert('Error occurred.');
				 }
			  }
		});


 		if(errors.isValid()){
			if (store.findRecord("id", task.get('id')) === null) {
					store.add(task);
				geo.updateLocation();

				}
			this.showList();
		}else{
				Ext.Msg.alert('Status', 'Changes saved successfully.');
		}
    },

    createTask: function(button, e, eOpts) {
        var newTask = Ext.create('TestApp.model.TodoModel', {
            title: '',
            description: '',
			priority: 'low',
            completed: false,
            dueDate: new Date()
        });

        this.getTodoForm().setRecord(newTask);
        this.getTodoFormDeleteFieldset().setHidden(true);
        this.showForm();

    },

    showForm: function() {
        Ext.Viewport.getLayout().setAnimation({
            type: 'slide',
            direction: 'left'
			
        });
		Ext.Viewport.getComponent(0).setActiveItem(this.getTodoForm());	
    },

    showList: function() {
        Ext.Viewport.getLayout().setAnimation({
            type: 'slide',
            direction: 'right'
        });
		this.getTodoFormDeleteFieldset().setHidden(true);
        Ext.Viewport.getComponent(0).setActiveItem(this.getTaskList());
    }
});

