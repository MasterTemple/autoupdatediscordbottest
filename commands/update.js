module.exports = {
    name: ['update'],
    description: 'Info about an item in LEGO Universe',
    args: true,
    use: `update`,
    example: [`update `],
    execute(message, args) {
        //message.channel.send('Updating')

        const { exec } = require("child_process");
        try{
            exec("git remote add auto https://github.com/MasterTemple/autoupdatediscordbottest.git master", (error, stdout, stderr) => {
                if (error) {
                    //console.log(`~error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    //console.log(`~stderr: ${stderr}`);
                    return;
                }
            });
        }catch{}

        exec("git pull", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
        });

        message.channel.send('Update Complete.')



    }
}
