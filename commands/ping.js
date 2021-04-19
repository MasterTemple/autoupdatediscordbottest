module.exports = {
    name: ['ping'],
    description: 'Info about an item in LEGO Universe',
    args: true,
    use: `ping`,
    example: [`ping `],
    execute(message, args) {
        message.channel.send('Pong!')
    }
}
