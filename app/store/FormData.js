Ext.define('phTest3.store.FormData', {
    extend: 'Ext.data.Store',
    alias: 'store.FormData',
 
    requires: [
        'phTest3.model.FormData'
    ],
 
    config: {
        model: 'phTest3.model.FormData',
        storeId: 'formData',
        proxy: {
            type: 'localstorage',
            id: 'formDataProxy'
        }
    }
});