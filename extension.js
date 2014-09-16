(function () {

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd', //The command to be called. With the standard command literal this would be: !bacon
         rank: 'user/bouncer/mod/manager', //Minimum user permission to use the command
         type: 'startsWith/exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */

        bot.commands.baconCommand = {
            command: 'bacon',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        }; // bacon

        bot.commands.banjoCommand = {
            command: 'banjo',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    var quotes = [ "Paddle faster!!!!", "Wanna see my resonator?", "You play a mean banjo!", "Jeff is the BESTO!", "http://cdn.meme.li/i/ox1dg.jpg" ];
                    API.sendChat("/me " + quotes[Math.floor(Math.random() * quotes.length)]);
                }
            }
        }; //banjo

        bot.commands.beerCommand = {
            command: 'beer',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Have a PBR on me!!!");
                }
            }
        }; // beer

        bot.commands.cccommandsCommand = {
            command: 'cccommands',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Country Club specific help: http://git.io/-kl-kQ");
                }
            }
        }; // cccommands

        bot.commands.diffieCommand = {
            command: 'diffie',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Joe, Joe, Joe Difffffffie");
                }
            }
        }; // diffie

        bot.commands.dougieCommand = {
            command: 'dougie',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Ain't a damn one know how to do the dougie. No, not in Kentucky!");
                }
            }
        }; // dougie

        bot.commands.jiveCommand = {
            command: 'jive',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Hello ladies!");
                }
            }
        }; // jive

        bot.commands.joviCommand = {
            command: 'jovi',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    var quotes = [ "Jovi knows, so be careful!', 'Hes super!" ];
                    API.sendChat("/me " + quotes[Math.floor(Math.random() * quotes.length)]);
                }
            }
        }; // jovi

        bot.commands.mulletCommand = {
            command: 'mullet',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    var quotes = [ "Do you like my Tennessee Waterfall?", "It's business in the front, Party in the back!" ];
                    API.sendChat("/me " + quotes[Math.floor(Math.random() * quotes.length)]);
                }
            }
        }; // mullet

        bot.commands.propsCommand = {
            command: 'props',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                  API.sendChat(basicBot.userUtilities.lookupUserName(chat.id).username +" just gave props to @"+ API.getDJ().username +" for playing a great track!"); // returns "not defined"
                  //API.sendChat(basicBot.userUtilities.lookupUserName(id).username +" just gave props to @"+ API.getDJ().username +" for playing a great track!"); // returns "not defined"
                  //API.sendChat(this.username +" just gave props to @"+ API.getDJ().username +" for playing a great track!"); // this.username returns undefined.
                }
            }
        }; // props

        bot.commands.redneckCommand = {
            command: 'redneck',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    var quotes = [
                      "You just might be a Redneck if: You've ever tried to drown a fish.",
                      "You just might be a Redneck if: You can yell to your mom, 'Hey, Aunt Betty!'",
                      "You just might be a Redneck if: Your kids fight with the dogs for their dinner.",
                      "You just might be a Redneck if: You've ever stood in line to have your picture taken with a freak of nature.",
                      "You just might be a Redneck if: More than one living relative is named after a Southern Civil War general.",
                      "You just might be a Redneck if: Your boat has not left the driveway in 15 years.",
                      "You just might be a Redneck if: Your mother has been involved in a fist-fight at a high school sports event.",
                      "You just might be a Redneck if: None of your shirts cover your stomach.",
                      "You just might be a Redneck if: You consider a six-pack and a bug-zapper high-quality entertainment.",
                      "You just might be a Redneck if: You've ever been kicked out of the zoo for heckling the monkeys.",
                      "You just might be a Redneck if: You've ever bathed with flea and tick soap.",
                      "You just might be a Redneck if: Your family tree does not fork.",
                      "You just might be a Redneck if: Your baby's first words are 'Attention K-Mart shoppers.'",
                      "You just might be a Redneck if: You have a Hefty Bag for a passenger-side window.",
                      "You just might be a Redneck if: The fifth grade is referred to as ' your senior year. '",
                      "You just might be a Redneck if: Three quarters of the clothes you own have logos on them.",
                      "You just might be a Redneck if: Your gene pool doesn't have a 'deep end.'",
                      "You just might be a Redneck if: You have the taxidermist's number on speed-dial.",
                      "You just might be a Redneck if: Your dog and your wallet are both on a chain.",
                      "You just might be a Redneck if: The UFO hotline limits you to one call per day.",
                      "You just might be a Redneck if: Your two-year-old has more teeth than you do.",
                      "You just might be a Redneck if: You have ever been accused of lying through your tooth.",
                      "You just might be a Redneck if: Your underwear doubles as your bathing suit.",
                      "You just might be a Redneck if: You let you kid pee in the parking lot at K-Mart."
                        ];
                    API.sendChat("/me " + quotes[Math.floor(Math.random() * quotes.length)]);
                }
            }
        }; // redneck

        bot.commands.rogCommand = {
            command: 'rog',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    var quotes = [ "RogieRog is the greatest!", "Have I ever told you how awesome RogieRog is?", "Roger, Roger. Whats our vector, Victor?" ];
                    API.sendChat("/me " + quotes[Math.floor(Math.random() * quotes.length)]);
                }
            }
        }; // rog

        bot.commands.tswizzleCommand = {
            command: 'tswizzle',
            rank: 'user',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    var quotes = [
                      "http://youtu.be/LEdqn-Gtg-s?t=23s",
                      "http://www.dumpaday.com/wp-content/uploads/2013/01/breakup-taylor-swift-meme.jpg",
                      "http://1.bp.blogspot.com/-1vwpWloqjCY/UDJANvDdAKI/AAAAAAAANoM/UQsKau1o5Ws/s1600/Aaaand-its-gone-country.jpg",
                      "http://media.tumblr.com/tumblr_m7sr6gG4Ln1r8lhxo.gif",
                      "http://i258.photobucket.com/albums/hh253/jimifunguzz/taylor-gif-7.gif",
                      "http://24.media.tumblr.com/bb6654c9755afca23a4ddb3bf6945860/tumblr_mf7olnV9z01r3vsr3o1_500.jpg",
                      "http://images.cheezburger.com/completestore/2010/9/27/ad2a72e3-9d6b-4b47-92e2-d6d68988bafc.jpg",
                      "http://cf.chucklesnetwork.agj.co/items/1/3/2/2/7/3/so-are-you-telling-me-that-taylor-swift-isnt-bluegrass.jpg",
                      "http://assets.diylol.com/hfs/234/3a3/d07/resized/taylor-swift-meme-generator-i-sing-well-if-you-re-deaf-c0f3bd.jpg?1346752503.jpg"
                        ];
                    API.sendChat("/me " + quotes[Math.floor(Math.random() * quotes.length)]);
                }
            }
        }; // tswizzle


        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "CletusBot",
        language: "english",
        chatLink: "https://rawgit.com/Yemasthui/basicBot/master/lang/en.json",
        maximumAfk: 120,
        afkRemoval: true,
        maximumDc: 60,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 8,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list. "],
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["unavailable", "The song you played was not available for some users. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "user",
        motdEnabled: true,
        motdInterval: 5,
        motd: "mmm beer",
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: "https://www.facebook.com/groups/TheCountryClub.Plug.DJ/",
        youtubeLink: null,
        website: null,
        intervalMessages: [],
        messageInterval: 5,
        songstats: true,
        commandLiteral: "!"
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/Yemasthui/basicBot/master/basicBot.js', extend);

}).call(this);
