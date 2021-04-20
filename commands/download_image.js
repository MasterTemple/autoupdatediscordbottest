module.exports = {
    name: ['testingupdater'],
    description: 'Info about an item in LEGO Universe',
    args: true,
    use: `ping`,
    example: [`ping `],
    execute(url, path) {
        const fs = require('fs')
        const axios = require('axios')
        const download_image = (url, image_path) =>
            axios({
                url,
                responseType: 'stream',
            }).then(
                response =>
                    new Promise((resolve, reject) => {
                        response.data
                            .pipe(fs.createWriteStream(image_path))
                            .on('finish', () => resolve())
                            .on('error', e => reject(e));
                    }),
            );
        return download_image(url, path)

    }
}

