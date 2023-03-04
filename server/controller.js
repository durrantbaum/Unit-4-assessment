module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
        "Your future will be happy and productive.",
        "You will soon be receiving an unexpected gift.",
        "You will travel to many places in your lifetime.",
        "Your dreams will come true if you work hard and stay focused."];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getInspiration: (req, res) => {
        const inspirations = ["Whatever you do, always give 100%... unless you're donating blood. -Bill Murray",
        "Do or do not. There is no try. -Yoda",
        "People say nothing is impossible, but I do nothing every day. -Winnie the Pooh",
        "Change is not a four letter word... but often your reaction to it is! -Jeffrey Gitomer",
        "I am an early bird and a night owl... so I am wise and I have worms. -Michael Scott"];
      
        let randomIndex = Math.floor(Math.random() * inspirations.length);
        let randomInspiration = inspirations[randomIndex];
      
        res.status(200).send(randomInspiration);
    },

    getSelfCare: (req, res) => {
        const tips = ['Take a warm bath with candles and relaxing music',
        'Practice deep breathing for 5 minutes',
        'Go for a walk in nature',
        'Write down 3 things you are grateful for',
        'Listen to your favorite music and dance',
        'Spend some time doing something creative'];
      
        let randomIndex = Math.floor(Math.random() * tips.length);
        let randomTips = tips[randomIndex];
      
        res.status(200).send(randomTips);
    },

}