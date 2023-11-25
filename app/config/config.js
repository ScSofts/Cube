const path = require('path');
const fs = require('fs');
const { Notification } = require('electron');
class ConfigManager{
    /**
     * 
     * @param {string} config_name 
     * @param {boolean} auto_save
     */
    constructor(config_name, auto_save = true){

        // Get path to config file
        const appdata_path = require('electron').app.getPath('userData');
        this.file = path.join(appdata_path , config_name + '.json' );
        
        // Create file if it doesn't exist
        if(!fs.existsSync(this.file))
            fs.writeFileSync(this.file, '{}' );

        // Load config file
        try{
            this.config = JSON.parse( fs.readFileSync(this.file, 'utf-8') );
        }catch(e){
            new Notification({
                title: 'Error',
                body: `Error parsing config file '${this.file}': ` + e   
            }).show();
        }
        this.auto_save = auto_save;
    }

    /**
     * 
     * @param {string} key 
     * @param {any} value 
     */
    set(key, value){
        this.config[key] = value;
        if(this.auto_save) this.save();
    }

    save(){
        fs.writeFileSync(this.file, JSON.stringify(this.config));
    }

    /**
     * 
     * @param {string} key 
     * @returns {any}
     */
    get(key){
        return this.config[key];
    }
}

exports.ConfigManager = ConfigManager;
