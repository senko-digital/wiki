# Server Console Logging

Console logs help you find errors and share them with support.

## Save the console output

1. Stop the server.
2. Open [Startup Parameters](/panel/startup) in the game panel and enable the `condebug` toggle.
3. Start the server and reproduce the issue.
4. Open or download `garrysmod/console.log` through the file manager or SFTP.

`-condebug` is a launch option, not a command for `server.cfg` or the game console. It records console output; it does not enable a separate debug mode for every addon. See [Steam's launch options documentation](https://help.steampowered.com/en/faqs/view/7D01-D2DD-D75E-2955).

## Send useful logs

Include the first error and the lines around it, along with what you did and when it happened. Check for passwords, tokens, and other private information before sharing the file publicly.

Disable the `condebug` toggle in Startup Parameters and restart the server when you no longer need file logging. Saved logs can grow over time; download any logs you need before removing old files.
