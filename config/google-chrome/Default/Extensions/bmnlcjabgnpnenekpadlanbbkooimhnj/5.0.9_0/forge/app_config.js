window.forge = {}; window.forge.config = {
    "author": "Honey Science Corporation", 
    "config_hash": "CONFIG_HASH_HERE", 
    "config_version": "4", 
    "core": {
        "firefox": {
            "package_name": "985c8d42048c4cbeb0bed522bd235ee7"
        }, 
        "general": {
            "reload": true
        }, 
        "ie": {
            "package_name": "{EF29F28F-CD3D-CC9C-B990-CB9C3B561428}"
        }, 
        "safari": {
            "package_name": "forge.safari.honey985c8d42048c4cbeb0bed522bd235ee7"
        }
    }, 
    "description": "Automatically find and apply coupon codes when you shop online!", 
    "json_safe_name": "Honey", 
    "logging": {
        "level": "DEBUG"
    }, 
    "logging_level": "DEBUG", 
    "name": "Honey", 
    "package_name": "honey985c8d42048c4cbeb0bed522bd235ee7", 
    "platform_version": "v1.4", 
    "plugins": {
        "activations": {
            "config": {
                "activations": [
                    {
                        "patterns": [
                            "http://*/*", 
                            "https://*/*"
                        ], 
                        "run_at": "start", 
                        "scripts": [
                            "src/js/lib/jquery-1.8.1.min.js", 
                            "src/js/lib/pns.jquery-alias.js", 
                            "src/js/lib/handlebars-v2.0.0.js", 
                            "src/js/lib/jquery.base64.min.js", 
                            "src/js/lib/jquery.color.js", 
                            "src/js/lib/jquery.ba-postmessage.js", 
                            "src/js/lib/mutation_summary.js", 
                            "src/js/lib/jquery.mutation-summary.js", 
                            "src/js/lib/raphael-min.js", 
                            "src/js/lib/ga.js", 
                            "src/js/lib/async.js", 
                            "src/js/lib/sha256.js", 
                            "src/js/lib/accounting.min.js", 
                            "src/js/lib/jst.js", 
                            "src/js/build/all.js"
                        ], 
                        "styles": []
                    }
                ]
            }, 
            "hash": "notahash"
        }, 
        "background": {
            "config": {
                "files": [
                    "js/build/bg.js"
                ]
            }, 
            "hash": "notahash"
        }, 
        "button": {
            "config": {
                "default_icon": "src/images/honey-icon-32d.png", 
                "default_icons": {
                    "firefox": "src/images/honey-icon-16.png", 
                    "safari": "src/images/honey-logo-32.png"
                }, 
                "default_popup": "src/html/popup.html", 
                "default_title": "Honey"
            }, 
            "hash": "notahash"
        }, 
        "contact": {
            "hash": "notahash"
        }, 
        "file": {
            "hash": "notahash"
        }, 
        "icons": {
            "config": {
                "chrome": {
                    "128": "src/images/honey-icon-128.png", 
                    "16": "src/images/honey-icon-16.png", 
                    "48": "src/images/honey-icon-48.png"
                }, 
                "firefox": {
                    "32": "src/images/honey-icon-32.png", 
                    "64": "src/images/honey-icon-64.png"
                }, 
                "safari": {
                    "32": "src/images/honey-icon-32.png", 
                    "48": "src/images/honey-icon-48.png", 
                    "64": "src/images/honey-icon-64.png"
                }
            }, 
            "hash": "notahash"
        }, 
        "media": {
            "hash": "notahash"
        }, 
        "prefs": {
            "hash": "notahash"
        }, 
        "request": {
            "config": {
                "permissions": [
                    "http://*/*", 
                    "https://*/*"
                ]
            }, 
            "hash": "notahash"
        }, 
        "update_url": {
            "config": {
                "firefox": "https://www.joinhoney.com/ff/update_rdf"
            }, 
            "hash": "notahash"
        }
    }, 
    "uuid": "985c8d42048c4cbeb0bed522bd235ee7", 
    "version": "5.0.9", 
    "xml_safe_name": "Honey"
};