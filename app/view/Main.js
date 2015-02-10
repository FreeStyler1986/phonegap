Ext.define('phTest3.view.Main', {
    extend: 'Ext.form.Panel',
    xtype: 'main',
    config: {
        layout: 'vbox',
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Ez az én appom'
            },
            {
                xtype: 'carousel',
                flex: 1,
                items:[
                   {
                        xtype: 'panel',
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'szoveg1',
                                fieldLabel: 'Szöveg1'
                            },
                            {
                                xtype: 'textfield',
                                name: 'szoveg2',
                                fieldLabel: 'Szöveg2'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'szoveg3',
                                fieldLabel: 'Szöveg3'
                            },
                            {
                                xtype: 'textfield',
                                name: 'szoveg4',
                                fieldLabel: 'Szöveg4'
                            }
                        ]
                    } 
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button',
                        action: 'save',
                        text: 'Mentés',
                        docked: 'bottom'
                    },
                    {
                        xtype: 'button',
                        action: 'load',
                        text: 'Betöltés',
                        docked: 'bottom'
                    }
                ]
            }
        ]
    }
});


/*Ext.define('phTest3.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});
*/
/*Ext.define('phTest3.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.Button',
        'Ext.Img'
    ],
    config: {
        layout: {
            type:"vbox",
            pack:"center",
            align:"center"
        },
        items: [
            {
                xtype: "image",
                src: "http://placehold.it/200x200",
                width: 200,
                height: 200
            },
            {
                xtype: "button",
                text: "Photo",
                handler: function() {
                    function success(image_uri) {
                        var img = Ext.ComponentQuery.query("image")[0];
                        img.setSrc(image_uri);
                    }

                    function fail(message) {
                        alert("Failed: " + message);
                    }

                    navigator.camera.getPicture(success, fail, 
                        {
                            quality: 50,
                            destinationType: navigator.camera.DestinationType.FILE_URI,
                            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
                        }
                    );
                }
            }
        ]
    }
});*/
