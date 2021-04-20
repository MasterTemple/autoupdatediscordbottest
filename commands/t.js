module.exports = {
    name: ['t'],
    description: 'Info about an item in LEGO Universe',
    args: true,
    use: `ping`,
    example: [`ping `],
    execute(message, args) {
        message.channel.send('uvwxyz!')
    }
}
