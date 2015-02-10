Ext.define('phTest3.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            form: 'main'
        },
        control: {
            'button[action=save]': {
                tap: 'doSave'
            },
            'button[action=load]': {
                tap: 'doLoad'
            }
        }
    },

    doSave: function() {
        var 
            form = this.getForm(),
            formData = form.getValues(),
            formDataStore = Ext.getStore('formData')
        ;
        formDataStore.removeAll();
        formDataStore.add(formData);
        form.reset();
        formDataStore.sync();
    },
    
    doLoad: function(){
        var
            form = this.getForm(),
            formData = Ext.getStore('formData').getAt(0)
        ;
        if(formData){
            form.setValues(formData.data);
        }
    }
});